/* nQuery v1.1.6 - nquery event ajax form ie - nqueryjs.com/license */

var nQuery = (function() {
  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
    document = window.document,
    elementDisplay = {}, classCache = {},
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,
    capitalRE = /([A-Z])/g,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    simpleSelectorRE = /^[\w-]*$/,
    class2type = {},
    toString = class2type.toString,
    nquery = {},
    camelize, uniq,
    tempParent = document.createElement('div'),
    propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
    isArray = Array.isArray ||
      function(object){ return object instanceof Array }

  nquery.matches = function(element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~nquery.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  // `$.nquery.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  nquery.fragment = function(html, name, properties) {
    var dom, nodes, container

    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
      if (!(name in containers)) name = '*'

      container = containers[name]
      container.innerHTML = '' + html
      dom = $.each(slice.call(container.childNodes), function(){
        container.removeChild(this)
      })
    }

    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }

    return dom
  }

  // `$.nquery.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the nQuery functions
  // to the array. Note that `__proto__` is not supported on Internet
  // Explorer. This method can be overriden in plugins.
  nquery.Z = function(dom, selector) {
    dom = dom || []
    dom.__proto__ = $.fn
    dom.selector = selector || ''
    return dom
  }

  // `$.nquery.isZ` should return `true` if the given object is a nQuery
  // collection. This method can be overriden in plugins.
  nquery.isZ = function(object) {
    return object instanceof nquery.Z
  }

  // `$.nquery.init` is nQuery's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  nquery.init = function(selector, context) {
    var dom
    // If nothing given, return an empty nQuery collection
    if (!selector) return nquery.Z()
    // Optimize for string selectors
    else if (typeof selector == 'string') {
      selector = selector.trim()
      // If it's a html fragment, create nodes from it
      // Note: In both Chrome 21 and Firefox 15, DOM error 12
      // is thrown if the fragment doesn't begin with <
      if (selector[0] == '<' && fragmentRE.test(selector))
        dom = nquery.fragment(selector, RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // If it's a CSS selector, use it to select nodes.
      else dom = nquery.qsa(document, selector)
    }
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a nQuery collection is given, just return it
    else if (nquery.isZ(selector)) return selector
    else {
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes.
      else if (isObject(selector))
        dom = [selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = nquery.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = nquery.qsa(document, selector)
    }
    // create a new nQuery collection from the nodes found
    return nquery.Z(dom, selector)
  }

  // `$` will be the base `nQuery` object. When calling this
  // function just call `$.nquery.init, which makes the implementation
  // details of selecting nodes and creating nQuery collections
  // patchable in plugins.
  $ = function(selector, context){
    return nquery.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.nquery.qsa` is nQuery's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  nquery.qsa = function(element, selector){
    var found,
        maybeID = selector[0] == '#',
        maybeClass = !maybeID && selector[0] == '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
        isSimple = simpleSelectorRE.test(nameOnly)
    return (isDocument(element) && isSimple && maybeID) ?
      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
      slice.call(
        isSimple && !maybeID ?
          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
          element.getElementsByTagName(selector) : // Or a tag
          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      )
  }

  function filtered(nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = document.documentElement.contains ?
    function(parent, node) {
      return parent !== node && parent.contains(node)
    } :
    function(parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent) return true
      return false
    }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className || '',
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          +value + "" == value ? +value :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) {
    return str == null ? "" : String.prototype.trim.call(str)
  }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // nQuery collections
  $.fn = {
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return nquery.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && nquery.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (!selector) result = $()
      else if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(nquery.qsa(this[0], selector))
      else result = this.map(function(){ return nquery.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var node = this[0], collection = false
      if (typeof selector == 'object') collection = $(selector)
      while (node && !(collection ? collection.indexOf(node) >= 0 : nquery.matches(node, selector)))
        node = node !== context && !isDocument(node) && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = '')
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return 0 in arguments ?
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        }) :
        (0 in this ? this[0].innerHTML : null)
    },
    text: function(text){
      return 0 in arguments ?
        this.each(function(idx){
          var newText = funcArg(this, text, idx, this.textContent)
          this.textContent = newText == null ? '' : ''+newText
        }) :
        (0 in this ? this[0].textContent : null)
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && !(1 in arguments)) ?
        (!this.length || this[0].nodeType !== 1 ? undefined :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
        setAttribute(this, attribute)
      }, this)})
    },
    prop: function(name, value){
      name = propMap[name] || name
      return (1 in arguments) ?
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        }) :
        (this[0] && this[0][name])
    },
    data: function(name, value){
      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

      var data = (1 in arguments) ?
        this.attr(attrName, value) :
        this.attr(attrName)

      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      return 0 in arguments ?
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        }) :
        (this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
           this[0].value)
        )
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (!this.length) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2) {
        var computedStyle, element = this[0]
        if(!element) return
        computedStyle = getComputedStyle(element, '')
        if (typeof property == 'string')
          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
        else if (isArray(property)) {
          var props = {}
          $.each(property, function(_, prop){
            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
          })
          return props
        }
      }

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      if (!name) return false
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      if (!name) return this
      return this.each(function(idx){
        if (!('className' in this)) return
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (!('className' in this)) return
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      if (!name) return this
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(value){
      if (!this.length) return
      var hasScrollTop = 'scrollTop' in this[0]
      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
      return this.each(hasScrollTop ?
        function(){ this.scrollTop = value } :
        function(){ this.scrollTo(this.scrollX, value) })
    },
    scrollLeft: function(value){
      if (!this.length) return
      var hasScrollLeft = 'scrollLeft' in this[0]
      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
      return this.each(hasScrollLeft ?
        function(){ this.scrollLeft = value } :
        function(){ this.scrollTo(value, this.scrollY) })
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    var dimensionProperty =
      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

    $.fn[dimension] = function(value){
      var offset, el = this[0]
      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    if (typeof node != "undefined") { 
          fun(node)
          for (var i = 0, len = node.childNodes.length; i < len; i++)
            traverseNode(node.childNodes[i], fun)
    }
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, nQuery objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            argType = type(arg)
            return argType == "object" || argType == "array" || arg == null ?
              arg : nquery.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        var parentInDocument = $.contains(document.documentElement, parent)

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          parent.insertBefore(node, target)
          if (parentInDocument && typeof node != "undefined") traverseNode(node, function (el) {
            if (typeof el != "undefined" && typeof el.nodeName != "undefined" && el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src)
              window['eval'].call(window, el.innerHTML)
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  nquery.Z.prototype = $.fn

  // Export internal API functions in the `$.nquery` namespace
  nquery.uniq = uniq
  nquery.deserializeValue = deserializeValue
  $.nquery = nquery

  return $
})()

// If `$` is not yet defined, point it to `nQuery`
window.nQuery = nQuery
//window.$ === undefined && (window.$ = nQuery)
/* Bryce's custom nQuery.noConflict */
if ( typeof define === "function" && define.amd ) {
  define( "nquery", [], function() {
    return nQuery;
  });
}

var
  // Map over nQuery in case of overwrite
  _nQuery = window.nQuery,

  // Map over the $ in case of overwrite
  _$ = window.$;

nQuery.noConflict = function( deep ) {
  if ( window.$ === nQuery ) {
    window.$ = _$;
  }

  if ( deep && window.nQuery === nQuery ) {
    window.nQuery = _nQuery;
  }

  return nQuery;
};

;(function($){
  var _zid = 1, undefined,
      slice = Array.prototype.slice,
      isFunction = $.isFunction,
      isString = function(obj){ return typeof obj == 'string' },
      handlers = {},
      specialEvents={},
      focusinSupported = 'onfocusin' in window,
      focus = { focus: 'focusin', blur: 'focusout' },
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (!focusinSupported && (handler.e in focus)) ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || (focusinSupported && focus[type]) || type
  }

  function add(element, events, fn, data, selector, delegator, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    events.split(/\s/).forEach(function(event){
      if (event == 'ready') return $(document).ready(fn)
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = delegator
      var callback  = delegator || fn
      handler.proxy = function(e){
        e = compatible(e)
        if (e.isImmediatePropagationStopped()) return
        e.data = data
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      if ('addEventListener' in element)
        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    ;(events || '').split(/\s/).forEach(function(event){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
      if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    var args = (2 in arguments) && slice.call(arguments, 2)
    if (isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn)
        return $.proxy.apply(null, args)
      } else {
        return $.proxy(fn[context], fn)
      }
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, data, callback){
    return this.on(event, data, callback)
  }
  $.fn.unbind = function(event, callback){
    return this.off(event, callback)
  }
  $.fn.one = function(event, selector, data, callback){
    return this.on(event, selector, data, callback, 1)
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }

  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event)

      $.each(eventMethods, function(name, predicate) {
        var sourceMethod = source[name]
        event[name] = function(){
          this[predicate] = returnTrue
          return sourceMethod && sourceMethod.apply(source, arguments)
        }
        event[predicate] = returnFalse
      })

      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
          'returnValue' in source ? source.returnValue === false :
          source.getPreventDefault && source.getPreventDefault())
        event.isDefaultPrevented = returnTrue
    }
    return event
  }

  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    return compatible(proxy, event)
  }

  $.fn.delegate = function(selector, event, callback){
    return this.on(event, selector, callback)
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.off(event, selector, callback)
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, data, callback, one){
    var autoRemove, delegator, $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.on(type, selector, data, fn, one)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = data, data = selector, selector = undefined
    if (isFunction(data) || data === false)
      callback = data, data = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(_, element){
      if (one) autoRemove = function(e){
        remove(element, e.type, callback)
        return callback.apply(this, arguments)
      }

      if (selector) delegator = function(e){
        var evt, match = $(e.target).closest(selector, element).get(0)
        if (match && match !== element) {
          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
        }
      }

      add(element, event, callback, data, selector, delegator || autoRemove)
    })
  }
  $.fn.off = function(event, selector, callback){
    var $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.off(type, selector, fn)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = selector, selector = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.trigger = function(event, args){
    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
    event._args = args
    return this.each(function(){
      // handle focus(), blur() by calling them directly
      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
      // items in the collection might not be DOM elements
      else if ('dispatchEvent' in this) this.dispatchEvent(event)
      else $(this).triggerHandler(event, args)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, args){
    var e, result
    this.each(function(i, element){
      e = createProxy(isString(event) ? $.Event(event) : event)
      e._args = args
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return (0 in arguments) ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  $.Event = function(type, props) {
    if (!isString(type)) props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true)
    return compatible(event)
  }

})(nQuery)

;(function($){
  var jsonpID = 0,
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/,
      originAnchor = document.createElement('a')

  originAnchor.href = window.location.href

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.isDefaultPrevented()
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings, deferred) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    if (deferred) deferred.resolveWith(context, [data, status, xhr])
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings, deferred) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    if (deferred) deferred.rejectWith(context, [xhr, type, error])
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options, deferred){
    if (!('type' in options)) return $.ajax(options)

    var _callbackName = options.jsonpCallback,
      callbackName = ($.isFunction(_callbackName) ?
        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
      script = document.createElement('script'),
      originalCallback = window[callbackName],
      responseData,
      abort = function(errorType) {
        $(script).triggerHandler('error', errorType || 'abort')
      },
      xhr = { abort: abort }, abortTimeout

    if (deferred) deferred.promise(xhr)

    $(script).on('load error', function(e, errorType){
      clearTimeout(abortTimeout)
      $(script).off().remove()

      if (e.type == 'error' || !responseData) {
        ajaxError(null, errorType || 'error', xhr, options, deferred)
      } else {
        ajaxSuccess(responseData[0], xhr, options, deferred)
      }

      window[callbackName] = originalCallback
      if (responseData && $.isFunction(originalCallback))
        originalCallback(responseData[0])

      originalCallback = responseData = undefined
    })

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return xhr
    }

    window[callbackName] = function(){
      responseData = arguments
    }

    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
    document.head.appendChild(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    // IIS returns Javascript as "application/x-javascript"
    accepts: {
      script: 'text/javascript, application/javascript, application/x-javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    if (query == '') return url
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data), options.data = undefined
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {}),
        deferred = $.Deferred && $.Deferred(),
        urlAnchor
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) {
      urlAnchor = document.createElement('a')
      urlAnchor.href = settings.url
      urlAnchor.href = urlAnchor.href
      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
    }

    if (!settings.url) settings.url = window.location.toString()
    serializeData(settings)

    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
    if (hasPlaceholder) dataType = 'jsonp'

    if (settings.cache === false || (
         (!options || options.cache !== true) &&
         ('script' == dataType || 'jsonp' == dataType)
        ))
      settings.url = appendQuery(settings.url, '_=' + Date.now())

    if ('jsonp' == dataType) {
      if (!hasPlaceholder)
        settings.url = appendQuery(settings.url,
          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
      return $.ajaxJSONP(settings, deferred)
    }

    var mime = settings.accepts[dataType],
        headers = { },
        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(),
        nativeSetHeader = xhr.setRequestHeader,
        abortTimeout

    if (deferred) deferred.promise(xhr)

    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
    setHeader('Accept', mime || '*/*')
    if (mime = settings.mimeType || mime) {
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
    xhr.setRequestHeader = setHeader

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
          result = xhr.responseText

          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            if (dataType == 'script')    (1,eval)(result)
            else if (dataType == 'xml')  result = xhr.responseXML
            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
          } catch (e) { error = e }

          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
          else ajaxSuccess(result, xhr, settings, deferred)
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
        }
      }
    }

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      ajaxError(null, 'abort', xhr, settings, deferred)
      return xhr
    }

    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings, deferred)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    if ($.isFunction(data)) dataType = success, success = data, data = undefined
    if (!$.isFunction(success)) dataType = success, success = undefined
    return {
      url: url
    , data: data
    , success: success
    , dataType: dataType
    }
  }

  $.get = function(/* url, data, success, dataType */){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(/* url, data, success, dataType */){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(/* url, data, success */){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope :
        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(key, value) {
      if ($.isFunction(value)) value = value()
      if (value == null) value = ""
      this.push(escape(key) + '=' + escape(value))
    }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(nQuery)

;(function($){
  $.fn.serializeArray = function() {
    var name, type, result = [],
      add = function(value) {
        if (value.forEach) return value.forEach(add)
        result.push({ name: name, value: value })
      }
    if (this[0]) $.each(this[0].elements, function(_, field){
      type = field.type, name = field.name
      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
        ((type != 'radio' && type != 'checkbox') || field.checked))
          add($(field).val())
    })
    return result
  }

  $.fn.serialize = function(){
    var result = []
    this.serializeArray().forEach(function(elm){
      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
    })
    return result.join('&')
  }

  $.fn.submit = function(callback) {
    if (0 in arguments) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.isDefaultPrevented()) this.get(0).submit()
    }
    return this
  }

})(nQuery)

;(function($){
  // __proto__ doesn't exist on IE<11, so redefine
  // the Z function to use object extension instead
  if (!('__proto__' in {})) {
    $.extend($.nquery, {
      Z: function(dom, selector){
        dom = dom || []
        $.extend(dom, $.fn)
        dom.selector = selector || ''
        dom.__Z = true
        return dom
      },
      // this is a kludge but works
      isZ: function(object){
        return $.type(object) === 'array' && '__Z' in object
      }
    })
  }

  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined)
  } catch(e) {
    var nativeGetComputedStyle = getComputedStyle;
    window.getComputedStyle = function(element){
      try {
        return nativeGetComputedStyle(element)
      } catch(e) {
        return null
      }
    }
  }
})(nQuery)

//     nQuery.js
//     (c) 2010-2016 Thomas Fuchs
//     nQuery.js may be freely distributed under the MIT license.

;(function($){
  var nquery = $.nquery, oldQsa = nquery.qsa, oldMatches = nquery.matches

  function visible(elem){
    elem = $(elem)
    return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
  }

  // Implements a subset from:
  // http://api.jquery.com/category/selectors/jquery-selector-extensions/
  //
  // Each filter function receives the current index, all nodes in the
  // considered set, and a value if there were parentheses. The value
  // of `this` is the node currently being considered. The function returns the
  // resulting node(s), null, or undefined.
  //
  // Complex selectors are not supported:
  //   li:has(label:contains("foo")) + li:has(label:contains("bar"))
  //   ul.inner:first > li
  var filters = $.expr[':'] = {
    visible:  function(){ if (visible(this)) return this },
    hidden:   function(){ if (!visible(this)) return this },
    selected: function(){ if (this.selected) return this },
    checked:  function(){ if (this.checked) return this },
    parent:   function(){ return this.parentNode },
    first:    function(idx){ if (idx === 0) return this },
    last:     function(idx, nodes){ if (idx === nodes.length - 1) return this },
    eq:       function(idx, _, value){ if (idx === value) return this },
    contains: function(idx, _, text){ if ($(this).text().indexOf(text) > -1) return this },
    has:      function(idx, _, sel){ if (nquery.qsa(this, sel).length) return this }
  }

  var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
      childRe  = /^\s*>/,
      classTag = 'nQuery' + (+new Date())

  function process(sel, fn) {
    // quote the hash in `a[href^=#]` expression
    sel = sel.replace(/=#\]/g, '="#"]')
    var filter, arg, match = filterRe.exec(sel)
    if (match && match[2] in filters) {
      filter = filters[match[2]], arg = match[3]
      sel = match[1]
      if (arg) {
        var num = Number(arg)
        if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '')
        else arg = num
      }
    }
    return fn(sel, filter, arg)
  }

  nquery.qsa = function(node, selector) {
    return process(selector, function(sel, filter, arg){
      try {
        var taggedParent
        if (!sel && filter) sel = '*'
        else if (childRe.test(sel))
          // support "> *" child queries by tagging the parent node with a
          // unique class and prepending that classname onto the selector
          taggedParent = $(node).addClass(classTag), sel = '.'+classTag+' '+sel

        var nodes = oldQsa(node, sel)
      } catch(e) {
        console.error('error performing selector: %o', selector)
        throw e
      } finally {
        if (taggedParent) taggedParent.removeClass(classTag)
      }
      return !filter ? nodes :
        nquery.uniq($.map(nodes, function(n, i){ return filter.call(n, i, nodes, arg) }))
    })
  }

  nquery.matches = function(node, selector){
    return process(selector, function(sel, filter, arg){
      return (!sel || oldMatches(node, sel)) &&
        (!filter || filter.call(node, null, arg) === node)
    })
  }
})(nQuery)
//     nQuery.js
//     (c) 2010-2016 Thomas Fuchs
//     nQuery.js may be freely distributed under the MIT license.

;(function($){
  // Create a collection of callbacks to be fired in a sequence, with configurable behaviour
  // Option flags:
  //   - once: Callbacks fired at most one time.
  //   - memory: Remember the most recent context and arguments
  //   - stopOnFalse: Cease iterating over callback list
  //   - unique: Permit adding at most one instance of the same callback
  $.Callbacks = function(options) {
    options = $.extend({}, options)

    var memory, // Last fire value (for non-forgettable lists)
        fired,  // Flag to know if list was already fired
        firing, // Flag to know if list is currently firing
        firingStart, // First callback to fire (used internally by add and fireWith)
        firingLength, // End of the loop when firing
        firingIndex, // Index of currently firing callback (modified by remove if needed)
        list = [], // Actual callback list
        stack = !options.once && [], // Stack of fire calls for repeatable lists
        fire = function(data) {
          memory = options.memory && data
          fired = true
          firingIndex = firingStart || 0
          firingStart = 0
          firingLength = list.length
          firing = true
          for ( ; list && firingIndex < firingLength ; ++firingIndex ) {
            if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
              memory = false
              break
            }
          }
          firing = false
          if (list) {
            if (stack) stack.length && fire(stack.shift())
            else if (memory) list.length = 0
            else Callbacks.disable()
          }
        },

        Callbacks = {
          add: function() {
            if (list) {
              var start = list.length,
                  add = function(args) {
                    $.each(args, function(_, arg){
                      if (typeof arg === "function") {
                        if (!options.unique || !Callbacks.has(arg)) list.push(arg)
                      }
                      else if (arg && arg.length && typeof arg !== 'string') add(arg)
                    })
                  }
              add(arguments)
              if (firing) firingLength = list.length
              else if (memory) {
                firingStart = start
                fire(memory)
              }
            }
            return this
          },
          remove: function() {
            if (list) {
              $.each(arguments, function(_, arg){
                var index
                while ((index = $.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1)
                  // Handle firing indexes
                  if (firing) {
                    if (index <= firingLength) --firingLength
                    if (index <= firingIndex) --firingIndex
                  }
                }
              })
            }
            return this
          },
          has: function(fn) {
            return !!(list && (fn ? $.inArray(fn, list) > -1 : list.length))
          },
          empty: function() {
            firingLength = list.length = 0
            return this
          },
          disable: function() {
            list = stack = memory = undefined
            return this
          },
          disabled: function() {
            return !list
          },
          lock: function() {
            stack = undefined;
            if (!memory) Callbacks.disable()
            return this
          },
          locked: function() {
            return !stack
          },
          fireWith: function(context, args) {
            if (list && (!fired || stack)) {
              args = args || []
              args = [context, args.slice ? args.slice() : args]
              if (firing) stack.push(args)
              else fire(args)
            }
            return this
          },
          fire: function() {
            return Callbacks.fireWith(this, arguments)
          },
          fired: function() {
            return !!fired
          }
        }

    return Callbacks
  }
})(nQuery)
//     nQuery.js
//     (c) 2010-2016 Thomas Fuchs
//     nQuery.js may be freely distributed under the MIT license.

;(function($, undefined){
  var prefix = '', eventPrefix,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
    animationName, animationDuration, animationTiming, animationDelay,
    cssReset = {}

  function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionDelay    = prefix + 'transition-delay'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationDelay     = prefix + 'animation-delay'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback, delay){
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined
    if ($.isFunction(ease))
      callback = ease, ease = undefined
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    if (delay) delay = parseFloat(delay) / 1000
    return this.anim(properties, duration, ease, callback, delay)
  }

  $.fn.anim = function(properties, duration, ease, callback, delay){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
        fired = false

    if (duration === undefined) duration = $.fx.speeds._default / 1000
    if (delay === undefined) delay = 0
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationDelay] = delay + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionDelay] = delay + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      } else
        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

      fired = true
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0){
      this.bind(endEvent, wrappedCallback)
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function(){
        if (fired) return
        wrappedCallback.call(that)
      }, ((duration + delay) * 1000) + 25)
    }

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(nQuery)
//     nQuery.js
//     (c) 2010-2016 Thomas Fuchs
//     nQuery.js may be freely distributed under the MIT license.

;(function($, undefined){
  var document = window.document, docElem = document.documentElement,
    origShow = $.fn.show, origHide = $.fn.hide, origToggle = $.fn.toggle

  function anim(el, speed, opacity, scale, callback) {
    if (typeof speed == 'function' && !callback) callback = speed, speed = undefined
    var props = { opacity: opacity }
    if (scale) {
      props.scale = scale
      el.css($.fx.cssPrefix + 'transform-origin', '0 0')
    }
    return el.animate(props, speed, null, callback)
  }

  function hide(el, speed, scale, callback) {
    return anim(el, speed, 0, scale, function(){
      origHide.call($(this))
      callback && callback.call(this)
    })
  }

  $.fn.show = function(speed, callback) {
    origShow.call(this)
    if (speed === undefined) speed = 0
    else this.css('opacity', 0)
    return anim(this, speed, 1, '1,1', callback)
  }

  $.fn.hide = function(speed, callback) {
    if (speed === undefined) return origHide.call(this)
    else return hide(this, speed, '0,0', callback)
  }

  $.fn.toggle = function(speed, callback) {
    if (speed === undefined || typeof speed == 'boolean')
      return origToggle.call(this, speed)
    else return this.each(function(){
      var el = $(this)
      el[el.css('display') == 'none' ? 'show' : 'hide'](speed, callback)
    })
  }

  $.fn.fadeTo = function(speed, opacity, callback) {
    return anim(this, speed, opacity, null, callback)
  }

  $.fn.fadeIn = function(speed, callback) {
    var target = this.css('opacity')
    if (target > 0) this.css('opacity', 0)
    else target = 1
    return origShow.call(this).fadeTo(speed, target, callback)
  }

  $.fn.fadeOut = function(speed, callback) {
    return hide(this, speed, null, callback)
  }

  $.fn.fadeToggle = function(speed, callback) {
    return this.each(function(){
      var el = $(this)
      el[
        (el.css('opacity') == 0 || el.css('display') == 'none') ? 'fadeIn' : 'fadeOut'
      ](speed, callback)
    })
  }

})(nQuery)

//// Deferred
//     nQuery.js
//     (c) 2010-2016 Thomas Fuchs
//     nQuery.js may be freely distributed under the MIT license.
//
//     Some code (c) 2005, 2013 jQuery Foundation, Inc. and other contributors

;(function($){
  var slice = Array.prototype.slice

  function Deferred(func) {
    var tuples = [
          // action, add listener, listener list, final state
          [ "resolve", "done", $.Callbacks({once:1, memory:1}), "resolved" ],
          [ "reject", "fail", $.Callbacks({once:1, memory:1}), "rejected" ],
          [ "notify", "progress", $.Callbacks({memory:1}) ]
        ],
        state = "pending",
        promise = {
          state: function() {
            return state
          },
          always: function() {
            deferred.done(arguments).fail(arguments)
            return this
          },
          then: function(/* fnDone [, fnFailed [, fnProgress]] */) {
            var fns = arguments
            return Deferred(function(defer){
              $.each(tuples, function(i, tuple){
                var fn = $.isFunction(fns[i]) && fns[i]
                deferred[tuple[1]](function(){
                  var returned = fn && fn.apply(this, arguments)
                  if (returned && $.isFunction(returned.promise)) {
                    returned.promise()
                      .done(defer.resolve)
                      .fail(defer.reject)
                      .progress(defer.notify)
                  } else {
                    var context = this === promise ? defer.promise() : this,
                        values = fn ? [returned] : arguments
                    defer[tuple[0] + "With"](context, values)
                  }
                })
              })
              fns = null
            }).promise()
          },

          promise: function(obj) {
            return obj != null ? $.extend( obj, promise ) : promise
          }
        },
        deferred = {}

    $.each(tuples, function(i, tuple){
      var list = tuple[2],
          stateString = tuple[3]

      promise[tuple[1]] = list.add

      if (stateString) {
        list.add(function(){
          state = stateString
        }, tuples[i^1][2].disable, tuples[2][2].lock)
      }

      deferred[tuple[0]] = function(){
        deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments)
        return this
      }
      deferred[tuple[0] + "With"] = list.fireWith
    })

    promise.promise(deferred)
    if (func) func.call(deferred, deferred)
    return deferred
  }

  $.when = function(sub) {
    var resolveValues = slice.call(arguments),
        len = resolveValues.length,
        i = 0,
        remain = len !== 1 || (sub && $.isFunction(sub.promise)) ? len : 0,
        deferred = remain === 1 ? sub : Deferred(),
        progressValues, progressContexts, resolveContexts,
        updateFn = function(i, ctx, val){
          return function(value){
            ctx[i] = this
            val[i] = arguments.length > 1 ? slice.call(arguments) : value
            if (val === progressValues) {
              deferred.notifyWith(ctx, val)
            } else if (!(--remain)) {
              deferred.resolveWith(ctx, val)
            }
          }
        }

    if (len > 1) {
      progressValues = new Array(len)
      progressContexts = new Array(len)
      resolveContexts = new Array(len)
      for ( ; i < len; ++i ) {
        if (resolveValues[i] && $.isFunction(resolveValues[i].promise)) {
          resolveValues[i].promise()
            .done(updateFn(i, resolveContexts, resolveValues))
            .fail(deferred.reject)
            .progress(updateFn(i, progressContexts, progressValues))
        } else {
          --remain
        }
      }
    }
    if (!remain) deferred.resolveWith(resolveContexts, resolveValues)
    return deferred.promise()
  }

  $.Deferred = Deferred
})(nQuery)

var prdom = prdom || {};
prdom.query = nQuery.noConflict(true);
//prdom.query.ajaxSetup({
 // cache: true
//});

var ntv = ntv || {};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery replaceText - v1.1 - 11/21/2009
// http://benalman.com/projects/jquery-replacetext-plugin/
// Copyright (c) 2009 "Cowboy" Ben Alman
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(prdom.query);

/*
 * jQuery Extra Selectors - (c) Keith Clark freely distributable under the terms of the MIT license.
 * 
 * twitter.com/keithclarkcouk
 * www.keithclark.co.uk
 */

(function($) {
	function getNthIndex(cur, dir) {
		var t = cur, idx = 0;
		while (cur = cur[dir] ) {
			if (t.tagName == cur.tagName) {
				idx++;
			}
		}
		return idx;
	}

	function isNthOf(elm, pattern, dir) {
		var position = getNthIndex(elm, dir), loop;
		if (pattern == "odd" || pattern == "even") {
			loop = 2;
			position -= !(pattern == "odd");
		} else {
			var nth = pattern.indexOf("n");
			if (nth > -1) {
				loop = parseInt(pattern, 10) || parseInt(pattern.substring(0, nth) + "1", 10);
				position -= (parseInt(pattern.substring(nth + 1), 10) || 0) - 1;
			} else {
				loop = position + 1;
				position -= parseInt(pattern, 10) - 1;
			}
		}
		return (loop<0 ? position<=0 : position >= 0) && position % loop == 0
	}

	var pseudos = {
		"first-of-type": function(elm) {
			return getNthIndex(elm, "previousSibling") == 0;
		},
		"last-of-type": function(elm) { 
			return getNthIndex(elm, "nextSibling") == 0;
		},
		"only-of-type": function(elm) { 
			return pseudos["first-of-type"](elm) && pseudos["last-of-type"](elm);
		},
		"nth-of-type": function(elm, i, match) {
			return isNthOf(elm, match[3], "previousSibling");
		},
		"nth-last-of-type": function(elm, i, match) {
			return isNthOf(elm, match[3], "nextSibling");
		}		
	}
	$.extend($.expr[':'], pseudos);
}(prdom.query));
// static class
ntv.Util = new function(){

    var q = prdom.query;
    this.consts = {
        // DOMAINS
        DOMAIN: "adserve.postrelease.com",
        JDOMAIN: "jadserve.postrelease.com",
        RESIZE_DOMAIN: "ntvimg-a.akamaihd.net",
        ASSETS_DOMAIN: "ntvassets-a.akamaihd.net",
        ASSETS_PREFIX: "s",

        // REQUEST
        VIS_ID: "prx_visitor",
        REQ_KEY: "prx_rk",
        REQ_URL: "prx_url",
        REQ_URL_NTV: "ntv_url",
        PAGE_REF: "prx_referrer",
        IS_MOBILE: "prx_mobile",
        AT: "ntv_at",
        SUB_AT: "ntv_sat",
        FRAUD: "ntv_fr",
        CPM: 'ntv_cpm',
        VALUE: 'ntv_v',
        TOTAL_VALUE: 'ntv_tv',


        // ENTITIES
        ABA: "prx_adp",
        ARTICLE_TMPL: "prx_t",
        AVP: "ntv_a",
        ADV_ID:  "prx_adv",
        PLC_ID: "prx_pl",

        // FILTERS
        ADV_FILTER: "prx_avtf",
        CMP_FILTER: "prx_ctf",
        AD_FILTER: "ntv_atf",
        PTD_FILTER: "ntv_ptd", // placements to display

        // SPECIAL DEBUG/PREVIEW OPTIONS
        REQ_OPTIONS: "prx_ro",
        RENDER_MODE: "prx_rm",
        OVERIDE_ARTICLE: "ntv_oat",
        PASS_PREVIEW: "ntv_tp",
        IP: "prx_userip",
        FORCE_JAVA: "ntv_jat",
        IS_TOUT: "ntv_it",
        FORCE_NET: "ntv_net",
        DEBUG_MODE: "ntv_dm",
        LEGACY_VIDEO_SUPPORT: "ntv_lvs",
        REDIRECT: "ntv_r",

        //VIDEO PLAYER TYPE
        YOUTUBE_PLAYER: 1,
        NATIVO_PLAYER: 2,
        VAST_PLAYER: 3,

        MAX_INT32_VALUE: 2147483647

    };
    var scope = this;
    var consts = this.consts;

    var canExecuteEvents = []; // used on the function canExecute to store when was the last time functions were trying to execute

    /*
     *   Check if the browser is firefox
     */
    this.isFirefox = function() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    };


    this.isIE = function() {
        return navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("rv:11.0") > -1;
    };

    /*
     *   This function will either run the parameter function right away, and add a onloadValidation function
     *  if the browser is not firefox or will wait for the load event for Firefox.
     */
    this.runWithFirefoxIframeProtection = function(iframeElem, func, onloadValidation) {
        this.isFirefox() ?
            q(iframeElem).bind("load", function () { func() })
            : (function () {
                func();
                if (onloadValidation){
                    q(iframeElem).bind("load", function () { onloadValidation() });
                }
            })()
    };

    /*
     *  This function will check if any of the list elements match the str
     */
    this.match = function(str, list) {
        for (var i = 0; i < list.length; i++) {
            if (str.indexOf(list[i]) >= 0) {
                return true;
            }
        }
        return false;
    };


    /*
     * This function will return a random int32 value between min and max. If the parameters are omitted it will take
     * into account the entire int32 range.
     */
    this.getRandomInt = function(min, max) {
        min = min || 0;
        max = max || consts.MAX_INT32_VALUE;
        return Math.floor(Math.random() * (max - min)) + min;
    };

    /*
     * This function will return the element width, height, and top and left positions.
     */
    this.getElementOffset = function(elem){
        var result = {
            top : elem.offsetTop,
            left : elem.offsetLeft,
            width : elem.offsetWidth,
            height : elem.offsetHeight
        };

        while (elem.offsetParent) {
            elem = elem.offsetParent;
            result.top += elem.offsetTop;
            result.left += elem.offsetLeft;
        }

        return result;
    };

    /*
     * This function will return the element width and height. It will give preference to get the value from the
     * respective attributes, otherwise will try to calculate. The result is rounded and returned as int.
     */
    this.getElementDimensions = function(elem){
        var r = Math.floor;
        var h = 0;
        var w = 0;
        if (elem.nodeName != 'IMG' || elem.complete || elem.id=="prx_disclaimer_iframe"){ // any element or if image check that it finished loading
            h = parseInt(q(elem).attr("height").toString().replace(/\g/gi,""));
            w = parseInt(q(elem).attr("width").toString().replace(/\g/gi,""));
            if (!h || isNaN(h)) h = q(elem).height();
            if (!w || isNaN(w)) w = q(elem).width();
        }
        return {
            w : r(w),
            h : r(h)
        }
    };

    this.setElementDimensions = function(elem, dimensions, maxWidth){
        if (isNaN(dimensions.w)|| isNaN(dimensions.h)){
            return;
        }

        var q = prdom.query;
        var ntvWidth = q(elem).attr('ntv-width'); // the initial with
        var ntvHeight = q(elem).attr('ntv-height'); // the initial height
        if (!ntvWidth){
            ntvWidth = dimensions.w;
            q(elem).attr('ntv-width',ntvWidth);
        }
        if (!ntvHeight){
            ntvHeight = dimensions.h;
            q(elem).attr('ntv-height',ntvHeight);
        }
        maxWidth = maxWidth || Math.MAX_INT32_VALUE;
        var w = Math.min(maxWidth, ntvWidth);
        var h = ntvHeight * w / ntvWidth;
        if (w != dimensions.w || h != dimensions.h && w > 0) {
            q(elem).css({
                'height': h,
                'width': w,
                'max-height': h,
                'max-width': w
            }).attr('height', h).attr('width', w);
        }
    };

    /*
     * This function will get the top and left scroll poisitons
     */
    this.getScrollPos = function(){
        var win = window;
        var docElem = document.documentElement;
        var body = document.body;
        return  {
            top : Math.floor(win.pageYOffset ? win.pageYOffset : docElem.scrollTop ? docElem.scrollTop : body.scrollTop),
            left : Math.floor(win.pageXOffset ? win.pageXOffset : docElem.scrollLeft ? docElem.scrollLeft : body.scrollLeft),
            time : new Date()
        }
    };


    /*
     * This function will generate an array with times in seconds we use to sample time on content,
     * scroll positions.
     */
    this.getSampleTimeArray = function ( cap ) {
        var result = [];
        var i = 0;
        var x = 0;
        var total = 0;
        while (total < cap) {
            x += 2000 + (90 * i);
            result.push(x);
            i++;
            total += x;
        }
        return result;
    };

    /*
     * This function will prevent the func to be executed more than once on a set inverval
     */
    this.canExecute = function (func, id, interval) {
        var now = new Date();
        if ((now - canExecuteEvents['lastCheck' + id]) < interval) {
            if (canExecuteEvents['missedCheck' + id] == 0) {
                canExecuteEvents['missedCheck' + id]++;
                setTimeout(func, interval)
            }
            return false;
        }
        canExecuteEvents['lastCheck' + id] = new Date();
        canExecuteEvents['missedCheck' + id] = 0;
        return true;
    };

    // private helper function
    var setOnLoad = function(element, func) {
        return element.onload = func;
    };

    // private helper function
    var setOnError = function (element, func) {
        return element.onerror = func;
    };

    /*
     * this function append a tracking pixel to a page
     */
    this.appendImage = function (imageUrl) {
        if (imageUrl != null) {
            var pr = PostRelease;
            // append page referrer if needed
            if (imageUrl.indexOf(this.getServerDomain()) > 0){
                if (imageUrl.indexOf(consts.PAGE_REF) < 0 && document.referrer) {
                    imageUrl += '&' + consts.PAGE_REF + '=' + encodeURIComponent(document.referrer);
                }
                if (pr.tout){
                    imageUrl += "&" + consts.IS_TOUT;
                }
            }
            // track page inventory properly in case of CPM impression
            var cpmImp = "ntv_at=46"
            if (imageUrl.indexOf(cpmImp) > 0){
                if (!pr.pageInventoryTracked) {
                    pr.pageInventoryTracked = true;
                    imageUrl = imageUrl.replace(cpmImp, cpmImp + ",302");
                }

            }

            imageUrl = this.adBlockerValidation(imageUrl);

            var img = new Image(1, 1);
            img.src = imageUrl;
            setOnLoad(img, function () {
                setOnLoad(img, null);
                setOnError(img, null);
            });
            setOnError(img, function () {
                setOnLoad(img, null);
                setOnError(img, null);
            });
        }
    };

    /*
     * This function check if the element is on the viewport, what is the element area and what is the viewable area
     */
    this.getElementViewability = function (el) {

        //jquery protection
        if (el instanceof prdom.query) {
            el = el[0];
        }
        var rect;
        try {
            rect = el.getBoundingClientRect();
        } catch (e){
            return {visible : false, totalArea : 0, visibleArea : 0};
        }

        // protection for old browsers
        if (!rect.width){
            rect.width = el.offsetWidth;
        }
        if (!rect.height){
            rect.height = el.offsetHeight
        }
        var win = prdom.win || window;

        var winHeight = win.innerHeight ? win.innerHeight : q(win).height();
        var winWidth = win.innerWidth ? win.innerWidth : q(win).width();

        var visibleHeight = 0;
        var visibleWidth = 0;
        if (rect.top >= 0 ) {
            if (rect.bottom > winHeight) {
                visibleHeight = rect.height - (rect.bottom - winHeight);
            } else {
                visibleHeight = rect.height;
            }
        } else {
            visibleHeight = rect.height + rect.top;
        }
        if (rect.left >= 0) {
            if (rect.right > winWidth) {
                visibleWidth = rect.width - (rect.right - winWidth);
            } else {
                visibleWidth = rect.width;
            }
        } else {
            if (rect.right > winWidth) {
                visibleWidth = rect.width - (rect.right - winWidth);
            }
            visibleWidth +=  (rect.width + rect.left);
        }

        var visibleArea = 0;
        if (visibleWidth > 0 && visibleHeight > 0){
            visibleArea = visibleWidth * visibleHeight;
        }

        var visible = visibleArea > 0 ||
            ((rect.top >= 0 && rect.top <= winHeight) || (rect.bottom >= 0 && rect.bottom <= winHeight))
            &&
            ((rect.left >= 0 && rect.left <= winWidth) || (rect.right >= 0 && rect.right <= winWidth));

        return {
            visible : visible,
            totalArea : rect.width * rect.height,
            visibleArea : visibleArea
        };
    };

    /*
     * This function will try to remove the element el from the array arr
     */
    this.removeElementFromArray = function(arr, el) {
        var index = -1;
        for (var i = 0; i < arr.length; i++) {
            if (el == arr[i]) {
                index = i;
            }
        }
        if (index >= 0) {
            arr.splice(index, 1);
        }
    };


    /*
     * Copy the properties from params to obj
     */
    this.copyProperties = function(params, obj){
        for (var prop in params) {
            if (typeof params[prop] != 'function') {
                obj[prop] = params[prop];
            }
        }
    };

    /* This function will check if the element is not a unit headline link,
     * or if it is but it doesn' have a href link, which means this link should trigger the
     * video to play */
    this.isNotValidHeadlineLink = function (elem){
        var c = elem.attr('class'); // element class
        c = c || "";
        return c.indexOf('prx_viewable_title') == -1 || elem.attr('href') == "#" || !elem.attr('href');
    };

    //random bytes that will be xored with the string
    //string is looped and the 1st byte of the key is xored with the 1st byte of the original array and so on
    this.xorWithKey = function (string, key){
        var result = [];
        for (var i = 0; i < string.length; i++){
            result.push(key[i % key.length] ^ string.charCodeAt(i));
        }
        return result;
    };

    this.arrayBufferToBase64 = function(buffer) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        var result = btoa( binary );
        result = result.replace(/[+]/g,'-');
        result = result.replace(/[/]/g,'_');
        return result;
    };

    this.adBlockerEncode = function(url){
        //1. generate random 4 bytes
        var randomBytes = [];
        for (var i = 0; i < 4; i++) {
            randomBytes.push(this.getRandomInt(0, 255) -128);
        }
        //2. xor it with url string (using xor function created below)
        var b = this.xorWithKey(url, randomBytes);
        //3. append random bytes to the head
        var newArray = randomBytes.concat(b);
        //4. base 64 encode entire byte array
        return this.arrayBufferToBase64(newArray);
    };


    var overrideAndEncodeRequest = function(domain, url, assetsPrefix){
        var index = url.indexOf(domain);
        var qs = url.substring(index + domain.length + 1);
        var prefix = '';
        if (assetsPrefix){
            prefix = consts.ASSETS_PREFIX;
        } else {
            qs = scope.adBlockerEncode(qs);
        }
        return url.substring(0,index) + prefix +  scope.adBlockerDomain + '/' + qs;
    };

    this.adBlockerValidation = function(url) {
        if (this.adBlocker){
            // server request
            if (url.indexOf(consts.ASSETS_DOMAIN) >= 0) {
                url = overrideAndEncodeRequest(consts.ASSETS_DOMAIN, url, true);
            } else if (url.indexOf(this.getServerDomain()) >= 0){
                url = overrideAndEncodeRequest(this.getServerDomain(), url);
            } else if (url.indexOf(consts.RESIZE_DOMAIN) >= 0) {
                url = overrideAndEncodeRequest(consts.RESIZE_DOMAIN, url);
            }
        }
        return url;
    };

    // Function to append a script to the page.
    // It has an optional parameter that should be a function that will be called
    // whenever the script is ready.
    // The id parameter is already optional and will force the logic to just add the script once.
    this.appendScript = function(url, onReadyEvent, id, doc) {
        doc = doc || document;
        var e = doc.createElement('script'); e.type = 'text/javascript';
        if (onReadyEvent != undefined) {
            if (e.readyState) {
                e.onreadystatechange = function () { // For old versions of IE
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        onReadyEvent();
                    }
                };
            } else {
                e.onload = function() { onReadyEvent() };
            }
        }
        // if id is defined
        if (id != undefined) {
            if (doc.getElementById(id)) { // if the element is already in the page, call the event and exits the function
                onReadyEvent();
                return;
            } else { // else set the id, and the element will be added to the page
                e.id = id;
            }
        }
        url = this.adBlockerValidation(url);
        e.src = ntvApplyProtocolToUrl(url);
        (doc.getElementsByTagName('head')[0] || doc.documentElement).appendChild(e);
    };


    this.getServerDomain = function(){
        return this.adBlocker ? this.adBlockerDomain : this.consts.JDOMAIN;
    };

    this.applyImageResizer = function(url){
        url = url.replace("assets.postrelease.com",  this.consts.RESIZE_DOMAIN); // legacy support
        url = url.replace(this.consts.ASSETS_DOMAIN, this.consts.RESIZE_DOMAIN);
        return url;
    };

    this.isAndroidTablet = function(){
        return navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/Mobile/i);
    };

    this.isiOS = function(){
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    };

    this.writeIframe = function(iframe, htmlStyte, head, body){
        var iframeDoc = iframe.contents()[0] || iframe[0].contentWindow.document;
        iframeDoc.write('<html '+ htmlStyte +'><head>' + head + '</head><body>' + body + '</body></html>');
        return iframeDoc;
    }

};

if (!Object.create) {
    Object.create = function (o) {
        function F() { }
        F.prototype = o;
        return new F();
    };
}

function ntvExtends(superClass, childClass){
    childClass.prototype = Object.create(superClass.prototype);
    childClass.prototype.constructor = childClass;
}

function ntvApplyProtocolToUrl(url){
    if (url.indexOf('http') != 0) {
        var prefix = window.location.protocol;
        if (url.indexOf('//') != 0) {
            prefix += '//';
        }
        url = prefix + url;
    }
    return url;
}

// Function to append a script to the page.
// It has an optional parameter that should be a function that will be called
// whenever the script is ready.
// The id parameter is already optional and will force the logic to just add the script once.
function ntvAppendScript(url, onReadyEvent, id, doc) {
    ntv.Util.appendScript(url,onReadyEvent,id, doc);
}


// Function to append a tracking pixel to a page
function ntvAppendPixelImage(imageUrl) {
    ntv.Util.appendImage(imageUrl);
}

function ntvAppendStylesheet(id, url, doc) {
    var doc = doc || document;
    if (!doc.getElementById(id)) {
        url = ntvApplyProtocolToUrl(url);
        var e = doc.createElement('link'); e.id = id; e.type = 'text/css'; e.rel = 'stylesheet'; e.href = url;
        (doc.getElementsByTagName('head')[0] || doc.documentElement).appendChild(e);
    }
}

function ntvApplyImageResizer(url){
    return ntv.Util.applyImageResizer(url);
}

// This function will make sure jQuery is loaded and assigned to prdom.query
// The even function will be called once the jQuery is available
function ntvjQueryInit(event) {
        event();
}

// Function to insert tracking code along with third party tracking.
// It randomizes the order to insert the main tracking and the 3rd party tracking
// The type parameter should be 1 for pixel tracking, or 2 for js tracking
function ntvInsertTracking(trackingUrl, thirdPartyTrackingTags, type) {
    this.trackingUrl = trackingUrl;
    this.thirdPartyTrackingTags = thirdPartyTrackingTags;
    this.type = type;

    this.track = function () {
        try {
            switch (this.type) {
                case 1:
                    ntvAppendPixelImage(this.trackingUrl);
                    break;
                case 2:
                    ntvAppendScript(this.trackingUrl);
                    break;
                default:
                    ntvAppendPixelImage(this.trackingUrl);
                    break;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    this.thirdPartyTrack = function () {
        try {
            if (this.thirdPartyTrackingTags.length > 0) {
                prdom.query('body').append(this.thirdPartyTrackingTags);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    var ord = Math.floor(Math.random() * 1e16);
    if (ord < 5000000000000000) {
        this.track();
        this.thirdPartyTrack();
    } else {
        this.thirdPartyTrack();
        this.track();
    }
}

// A stop watch.
// Call resume to start/resume to start the clock 
// and stop to pause/stop the stop.
// The duration function should be used to retrieve the elapsed time in ms
function ntvStopWatch(event, triggerTime) {
    this.startTime = null;
    this.rval = 0;

    this.event = event;
    this.triggerTime = triggerTime;
    this.eventFired = false;

    var obj = this;

    this.stop = function () {
        if (this.startTime != null) {
            this.rval += new Date() - this.startTime;
            this.startTime = null;
        }
    }
    this.reset = function () {
        this.startTime = null;
        this.rval = 0;
    }
    this.resume = function () {
        if (this.startTime == null) {
            this.startTime = new Date();
            this.checkEvent();
        }
    }
    this.duration = function () { // in ms
        var result = this.rval;
        if (this.startTime != null) {
            result += new Date() - this.startTime;
        }
        return result;
    }
    this.checkEvent = function () {
        if (this.event != undefined && this.triggerTime != undefined) {
            if (this.duration() >= this.triggerTime && !this.eventFired) {
                this.event();
                this.eventFired = true;
            } else if (this.startTime != null) {
                setTimeout(function () {
                    obj.checkEvent();
                }, 50);
            }
        }
    }
}

// this class extends ntvStopWatch
function ntvTimeOnContentStopWatch(parent) {
    ntvStopWatch.call(this);
    this.parent = parent;
    this.cap = 600000; // 10 minutes
    this.totalTime = 0;
    this.sampleTimes = ntv.Util.getSampleTimeArray(this.cap);
    this.triggerTime = null;
    this.onLeaveTracked = false;
    this.engagementCountTracked = false;
    var obj = this;

    this.onLeave = function () {
        if (!this.onLeaveTracked) {
            this.onLeaveTracked = true;
            if (this.totalTime > 0) {
                this.trackTimeOnContent(true);
            }
        }
    }

    this.init = function () {
        var obj = this;
        prdom.query(window).bind('beforeunload pagehide unload', function () { obj.onLeave(); });
    }

    obj.init();

    // override check event from stopWatch class
    this.checkEvent = function () {
        if (this.sampleTimes.length >= 0) {
            if (this.triggerTime == null) {
                if (this.sampleTimes.length > 0)
                    this.triggerTime = this.sampleTimes.shift();
                else
                    return;
            }
            //track engagement count if needed
            if (!this.engagementCountTracked && (this.totalTime + this.duration()) >= 5000) {
                this.engagementCountTracked = true;
                ntvAppendPixelImage(this.parent.tracker.getUrl(38));
            }
            // track the delta based on the step size/trigger time
            if (this.duration() >= this.triggerTime) {
                this.trackTimeOnContent(false);
                this.triggerTime = null;
                this.resume();
            } else if (this.startTime != null) {
                var obj = this;
                setTimeout(function () {
                    obj.checkEvent();
                }, 50);
            }
        }
    }

    this.trackTimeOnContent = function (trackTotalTime) {
        var diff = this.duration();
        this.totalTime += diff;
        // adjust the diff in case the number is bigger than the cap
        if (this.totalTime > this.cap) {
            diff -= this.totalTime - this.cap;
            this.totalTime = this.cap;
        }
        if (diff <= 0 && !trackTotalTime) {
            return;
        } else if (diff <= 0) {
            diff = 0;
        }

        var url = this.parent.tracker.getUrl(34);
        // add the value
        url += '&' + PostRelease.consts.VALUE + '=' + diff;

        //only if we want to track total time
        if (trackTotalTime) {
            url += '&' + PostRelease.consts.TOTAL_VALUE + '=' + this.totalTime;
        }

        // do the tracking
        ntvAppendPixelImage(url);
        // reset
        this.reset();
    }

    this.stopAndTrack = function () {
        this.stop();
        this.trackTimeOnContent(false);
    }
}

ntvTimeOnContentStopWatch.prototype = Object.create(ntvStopWatch.prototype);

// This function will make a cross domain get request
function ntvXDomainRequest(url) {
    var xhr;
    if (window.XDomainRequest) {
        xhr = new window.XDomainRequest();
    } else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.open('GET', url, false);
    xhr.send();
}

// This function will espace the string if it has not regex special chars
function ntvRegexEscape(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

// This function will trim the string removing spaces from the begining and end of the string
function ntvTrim(string) {
    return string.replace(/^\s+|\s+$/gm, '');
}


// Utility object to generate the tracking pixel urls based on the action type
// params.aqID
// params.adID
// params.baseTrackingUrl
// params.adVersionPlacement
function ntvTrackingUrlUtil(params, parent) {

    ntv.Util.copyProperties(params, this);
    this.parent = parent;

    if (!this.parent.hasOwnProperty("recordType")) {
         this.parent.recordType = 1;
    }
    //constants
    this.secondaryImpressionActionType = 2;
    this.clickActionType = 3;
    this.videoStartActionType = 56;
    this.videoEndActionType = 23;
    this.videoProgress25PercentActionType = 39;
    this.videoProgress50PercentActionType = 40;
    this.videoProgress75PercentActionType = 41;
    this.videoHeadlineClick = 48;
    this.clickToUnMute = 55;
    this.readAndClickActionTypes = '2,3';
    this.ArticlePageViewActionType = 52;
    this.videoView = 22;
    this.videoBillableView = 58;
    this.videoViewManualStart = 57;
    this.videoPlayed15SecondsType = 60;
    this.videoPlayed30SecondsType = 61;

    this.getUrl = function (actionTypeID) {
        var result = this.baseTrackingUrl + actionTypeID;

        // Ad Version Placement
        if (this.adVersionPlacement.length > 0 || this.adID >= 100000) {
            result += "&" + PostRelease.consts.AVP  + "=" + this.adVersionPlacement;
        }
        // Record type
        if (this.parent.recordType == 30) {
            result += "&" + PostRelease.consts.FRAUD;
        }
        result += "&ord=" + new Date().getTime()
        return result;
    }

}



/**
* Created by mmurray on 10/15/14.
*/
function ntvHexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// sets on prdom.onFocus if the tab is visible or not
// it will also fire the events set to onFocusEvents when the onFocus event changes
function ntvInitOnFocusTracking() {
    prdom.onFocus = false;
    prdom.onFocusEvents = [];
    var hidden = "hidden";

    var win = PostRelease.getTopWindow();
    var doc = win.document;

    // Standards:
    if (hidden in doc)
        doc.addEventListener("visibilitychange", onchange);
    else if ((hidden = "mozHidden") in doc)
        doc.addEventListener("mozvisibilitychange", onchange);
    else if ((hidden = "webkitHidden") in doc)
        doc.addEventListener("webkitvisibilitychange", onchange);
    else if ((hidden = "msHidden") in doc)
        doc.addEventListener("msvisibilitychange", onchange);
    // IE 9 and lower:
    else if ('onfocusin' in doc)
        doc.onfocusin = doc.onfocusout = onchange;
    // All others:
    else if ('onpageshow' in win && 'onpagehide' in win)
        win.onpageshow = win.onpagehide = onchange;
    else if ('onfocus' in win && 'onblur' in win)
        win.onfocus = win.onblur = onchange;
    else {
        // in case there is bindable event 
        prdom.onFocus = true;
        return;
    }

    function onchange(evt) {
        var v = 'visible', h = 'hidden',
            evtMap = {
                focus: v, focusin: v, pageshow: v, blur: h, focusout: h, pagehide: h
            };

        evt = evt || window.event;
        if (evt.type in evtMap)
            prdom.onFocus = evtMap[evt.type] == "visible";
        else
            prdom.onFocus = !this[hidden];
    
        for (var i = 0; i < prdom.onFocusEvents.length; i++ ) {
            prdom.onFocusEvents[i]();
        }
        prdom.query(win).trigger("ntvOnFocusChange");
    }
    // set the initial state
    onchange({ type: (document.visibilityState == "visible") ? "focus" : "blur" })
}///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CONFIG SETTINGS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function _pr() {

    // TOOD: need to go over those and check which ones should be "public". if not, those should be
    // defined as var xyz = something;
    this.renderOptions = '';
    this.urlprotocol = window.location.protocol;
    this.advid = '';
    this.adversionplacementid = '';
    this.placementid = '';
    this.makeAdRequest = true;
    this.articleUrlMonitorArr = []; // array with the objects to monitor article url change
    this.requestUrl = window.location;
    this.rt = 1; // record type
    this.adsToFilter = [];
    this.campaignsToFilter = [];
    this.advertisersToFilter = [];
    this.ISManager = {}; // Infinite scroll positions
    this.viewableImpressionTrackers = [];
    this.videoViewableTrackers = [];
    this.inventoryTrackers = [];
    this.videoPlayers = [];
    this.articles = [];
    this.consts = ntv.Util.consts;
    this.ampMode = false;

    // private variables
    var q = prdom.query;
    var debugMode = false;
    var scope = this;

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // START
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    this.Start = function (conf) {

        // check the config queue
        try {
            if (window._prx) {
                for (var i = 0; i < _prx.length; i++) {
                    if (_prx[i][0] === 'cfg.SetUserAnonymous') {
                        this.renderOptions += 'a';
                    } else if (_prx[i][0] === 'cfg.SetUserPremium') {
                        this.renderOptions += 'p';
                    } else if (_prx[i][0] === 'cfg.ClickOutTracking') {
                        this.makeAdRequest = false;
                    } else if (_prx[i][0] === 'cfg.RequestUrl') {
                        this.requestUrl = ntvTrim(_prx[i][1]);
                    } else if (_prx[i][0] === 'cfg.Debug') {
                        debugMode = true;
                    } else if (_prx[i][0] === 'cfg.Amp') {
                        this.ampMode = true;
                    } else if (_prx[i][0] === 'cfg.ServerDomain'){
                        ntv.Util.adBlockerDomain = _prx[i][1];
                        ntv.Util.adBlocker = 1;
                    }
                }
            }
        }
        catch (err) { }

        // convert config to a query param list
        var configParams = "";
        if (typeof (conf) != "undefined") {
            for (var i in conf) {
                configParams += ("&ntv_" + i + "=" + conf[i]);
            }
        }

        // look up tracking info first
        this.FindTrackerInfo();

        // request ads trigger
        var prx_rtparam = '';
        prx_rtparam += this.CheckIfExistAndAppendQS(this.advid, this.consts.ADV_ID);
        prx_rtparam += this.CheckIfExistAndAppendQS(this.adversionplacementid, this.consts.AVP);
        prx_rtparam += this.CheckIfExistAndAppendQS(this.placementid, this.consts.PLC_ID);
        prx_rtparam += this.CheckIfExistAndAppendQS(this.renderOptions, this.consts.REQ_OPTIONS);
        prx_rtparam += this.FowardQS(this.consts.OVERIDE_ARTICLE);
        prx_rtparam += this.FowardQS(this.consts.ABA);
        prx_rtparam += this.FowardQS(this.consts.RENDER_MODE);
        prx_rtparam += this.FowardQS(this.consts.ARTICLE_TMPL);
        prx_rtparam += this.FowardQS(this.consts.PASS_PREVIEW);
        prx_rtparam += this.FowardQS(this.consts.IP);
        prx_rtparam += configParams;

        if (this.rt == 30) prx_rtparam += '&' + this.consts.FRAUD;
        if (debugMode) prx_rtparam += '&' + this.consts.DEBUG_MODE;

        if (document.referrer.length > 0)
            prx_rtparam += this.CheckIfExistAndAppendQS(document.referrer, this.consts.PAGE_REF);

        if (this.makeAdRequest) {
            this.getAdRequest(prx_rtparam);
        }
        // if track time on content for click out
        else if (this.adversionplacementid != '') {
            //  we set the parameters and instantiate the object
            var params = [];
            params.selector = window;
            params.adVersionPlacement = this.adversionplacementid;
            params.multiArticlesInPage = false;
            params.baseTrackingUrl = window.location.protocol + '//' + ntv.Util.getServerDomain() + '/trk.gif?' + this.consts.AT +'=';
            params.secondaryImpressionTags = "";
            params.moatEnabled = false;
            params.trackTimeOnContent = true;
            params.recordType = 1;
            var ntvAT = new ntvArticleTracker(params);
        }
    };

    /* Returns the top most window we have access to */
    this.getTopWindow = function() {
        var currentWindow = validTopWindow = window;
        while (currentWindow.parent && currentWindow != currentWindow.parent) {
            try {
                currentWindow = currentWindow.parent;

                // check if we have access to it
                if (currentWindow.document)
                    validTopWindow = currentWindow;

            } catch (e) {}
        }

        return validTopWindow;
    }


    this.getAdRequest = function (prx_rtparam) {
        var url = this.requestUrl.toString();
        // we have a protection to allow our solution to work on google cache pages, and in that scenario
        // we use as request URL the one found in the element div#google-cache-hdr div a
        if (url.indexOf('http://webcache.googleusercontent.com') == 0){
            try {
                url = prdom.query("div#google-cache-hdr div a")[0].href;
            } catch (e){}
        }
        ntv.Util.appendScript(ntv.Util.getServerDomain() + '/t?' + this.consts.REQ_URL_NTV + '=' + encodeURIComponent(url)
            + prx_rtparam
        );
    }

    this.getLegacyAdRequest = function (prx_rtparam) {
        ntv.Util.appendScript(this.consts.DOMAIN + '/serve/trigger/' + new Date().getTime() + '.js'
            + '?' + this.consts.REQ_URL + '=' + encodeURIComponent(this.requestUrl)
            + prx_rtparam
        );
    }

    this.CheckIfExistAndAppendQS = function (id, qs) {
        if (id != '') {
            return '&' + qs + '=' + encodeURIComponent(id);
        }
        return '';
    }

    this.FowardQS = function (qs) {
        var value = this.GetQS(qs);
        if (value != '') {
            return '&' + qs + '=' + value;
        }
        return '';
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // RENDERING
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var checkMediation = function(tracking){

        var trackingUrl = tracking.trackingBaseUrl + 311
            + '&' + scope.consts.AVP + '=' + tracking.adVersionPlacement
            + '&ord=' + new Date().getTime()
            + '&' +  scope.consts.SUB_AT + '=';

        if (window.STR){
            ntv.Util.appendImage( trackingUrl + 1 ); // Sharethrough
        }
        if (window._tlModuleLoader){
            ntv.Util.appendImage( trackingUrl + 5 ); // 3lift
        }
        if (window.AdsNative){
            ntv.Util.appendImage( trackingUrl + 21 ); // AdsNative
        }
        if (window.Connatix){
            ntv.Util.appendImage( trackingUrl + 2 ); // Connatix
        }
    }

    this.ProcessResponse = function (resp) {

        // TODO: Should be fixed on the ad server side!
        if (!resp.placements) {
            return; // if the response doesn't have placements, there is nothing to be done as this is not a valid publication section.
        }

        for (var i = 0; i < resp.placements.length; i++) {
            var placement = resp.placements[i];
            // tout response
            if (placement.selector) {
                if (i == 0){ // only check mediation for the first placement
                    checkMediation(placement.tracking);
                }
                this.tout = true;
                if (placement.ads && placement.ads.length > 0) {
                    // if we have an ad, map the ad and push it to be injected
                    this.MapResponseAndPushAd(placement);
                } else {
                    if (!placement.isABA) { // we don' track inventory for ABA
                        var isInfScroll = placement.hasOwnProperty("infScroll");

                        var vcpmParams = placement.tracking.vcpmParams;
                        vcpmParams.thirdPartyTrackingTags = "";
                        vcpmParams.selector = placement.selector;
                        vcpmParams.placementID = placement.id;
                        vcpmParams.infiniteScroll = isInfScroll;
                        vcpmParams.isInvTracking = true;
                        if (vcpmParams.infiniteScroll) {
                            vcpmParams.is_initPos = placement.infScroll.position;
                            vcpmParams.is_interval = placement.infScroll.interval;
                        }
                        new ntvViewableImpressionTracker(vcpmParams);

                        var cpmTracker = {};
                        cpmTracker.url = placement.tracking.trackingBaseUrl;
                        cpmTracker.selector = placement.selector;
                        cpmTracker.placementID = placement.id;
                        cpmTracker.infiniteScroll = isInfScroll;
                        cpmTracker.adVersionPlacement = placement.tracking.adVersionPlacement;
                        cpmTracker.passback = placement.passback;
                        cpmTracker.vcpmParams = placement.tracking.vcpmParams;
                        this.TrackInventory(cpmTracker);
                    }
                }
            }
            else {
                // article response
                this.MapResponseAndRenderArticle(placement);
            }
        }

        // inject extra general purpose tracking code if needed
        if (resp.trackingCode) {
            this.TryAppendTrackingCode(resp.trackingCode);
        }

        // TODO: this is tout no? why are we calling it here?
        this.TryRenderAd();
    }

    this.TryAppendTrackingCode = function(trackingCode) {
        var body = q('body');
        if (body.length > 0) {
            body.append(trackingCode);
        }
        else if (/loaded|complete/.test(document.readyState) === false) {
            setTimeout(function () {
                PostRelease.TryAppendTrackingCode(trackingCode)
            }, 100);
        }
    }

    this.Passback = function() {
        if (this.passbackManager)
            this.passbackManager.next();
    }

    this.MapResponseAndPushAd = function(placement) {
        for (var i = 0; i < placement.ads.length; i++) {
            var obj = [];
            obj.placement = placement.id;
            obj.RenderSelector = placement.selector;
            obj.InjectionMode = placement.injectionMode;
            var ad = placement.ads[i];
            obj.adId = ad.id;
            obj.campaignId = ad.campaignID;
            obj.fLevel = ad.filteringLevel;
            obj.advertiserId = ad.advertiser.id;
            obj.RenderHtml = ad.preview.html;
            obj.ClickUrl = ad.toutClickTracker;
            obj.InfiniteScroll = placement.hasOwnProperty("infScroll");
            if (obj.InfiniteScroll) {
                obj.IS_InitPos = placement.infScroll.position;
                obj.IS_Interval = placement.infScroll.interval;
            }
            else {
                obj.ParentCount = placement.parentCount;
            }

            this.PushAd(obj);
        }
    }

    this.MapResponseAndRenderArticle = function (placement) {
        var obj = [];
        var ad = placement.ads.pop();
        obj.PreviewText = ad.preview.text;
        obj.ImagePreviewUrl = ad.preview.image;
        obj.AuthorName = ad.advertiser.name;
        obj.AuthorUrl = ad.advertiser.url;
        obj.AuthorLogo = ad.advertiser.logo;
        var article = ad.article;
        obj.Headline = article.title;
        obj.HtmlBody = article.body;
        obj.DisplayDate = ad.articleTemplate.displayDate;
        obj.TargetUrl = ad.articleTemplate.targetUrl;
        obj.HideAuthorLink = ad.articleTemplate.hideAuthorLink;
        obj.ArticleUrlShared = ad.articleTemplate.isArticleUrlShared;
        obj.Removals = ad.articleTemplate.removals;
        obj.Fragments = ad.articleTemplate.fragments;
        obj.ArticleID = "ntv" + ad.id;
        obj.paginationNextUrl = article.paginationNextUrl ? article.paginationNextUrl : "";
        obj.paginationPreviousUrl = article.paginationPreviousUrl ? article.paginationPreviousUrl : "";

        this.articles[ad.id] = obj;
        this.Render_TemplateAd(obj);
    }

    this.InfiniteScroll = function (selector, currentPosition, placement, interval) {
        this.selector = selector;
        this.currentPosition = currentPosition;
        this.queryPostion = currentPosition;
        this.placement = placement;
        this.interval = interval;

        this.getSelector = function () {
            return this.selector.replace("%p%", this.currentPosition)
        }

    }

    this.PushAd = function (adPackage) {
        if (adPackage.hasOwnProperty("fLevel")) {
            switch (adPackage.fLevel) {
                case 0: // filter by advertiser (default value)
                    this.advertisersToFilter.push(adPackage.advertiserId);
                    break;
                case 1: // filter by campaign
                    this.campaignsToFilter.push(adPackage.campaignId);
                    break;
                case 2: // filter by ad
                    this.adsToFilter.push(adPackage.adId);
                    break;
            }
        }
        // DFP integration mode
        if (typeof Nativo !== 'undefined') {

            // Need to prepand third party click if exist
            if (adPackage.ClickUrl != undefined) {
                var nativoClickUrl = adPackage.ClickUrl;

                if (Nativo.tpc[adPackage.RenderSelector])
                    adPackage.ClickUrl = Nativo.tpc[adPackage.RenderSelector] + adPackage.ClickUrl;
                else if (Nativo.thirdPartyClickUrl)
                    adPackage.ClickUrl = Nativo.thirdPartyClickUrl + adPackage.ClickUrl;


                var regex = new RegExp(ntvRegexEscape(nativoClickUrl).replace(/(ord=)[^\&]+/, '$1' + '[^\\&]+'),"g");
                adPackage.RenderHtml = adPackage.RenderHtml.replace(regex, adPackage.ClickUrl);
            }

            // store the ads we displayed so far (to filter in case of campaign level tag)
            if (Nativo.atf && Nativo.atf.indexOf(adPackage.adId) < 0) {
                Nativo.atf.push(adPackage.adId);
            }
        }

        if (adPackage.InfiniteScroll && adPackage.IS_Interval > 0 && adPackage.RenderSelector.indexOf('%p%') > 0) // Infinite scroll
        {
            this.setInfiniteScrollManager(adPackage.placement, adPackage.IS_InitPos, adPackage.IS_Interval, adPackage.RenderSelector);
            adPackage.RenderSelector = this.ISManager[adPackage.placement].getSelector();
        }

        prxAds.push(adPackage);
    }

    this.setInfiniteScrollManager = function (placementID, infScrInitPos, infScrInterval, renderSelector) {
        if (this.ISManager[placementID] == undefined) {
            var infiniteScroll = new this.InfiniteScroll(renderSelector,
                infScrInitPos,
                placementID,
                infScrInterval
            );
            this.ISManager[placementID] = infiniteScroll;
        } else {
            this.ISManager[placementID].currentPosition += infScrInterval;
        }
        if (!this.ISMonitorRunning) {
            this.ISMonitorRunning = true;
            this.ISMonitor();
        }
    }

    this.ISMonitor = function () {
        for (var i in this.ISManager) {
            var manager = this.ISManager[i];
            var selector = manager.getSelector()
            if (manager.queryPostion == manager.currentPosition &&
                q(selector).length > 0) {
                manager.queryPostion += manager.interval;
                //this.AddScript(this.consts.DOMAIN + '/serve/is/' + new Date().getTime() + '.js?' -- old .net pipe
                ntv.Util.appendScript(ntv.Util.getServerDomain() + '/t?'
                    + this.consts.PLC_ID + '=' + encodeURIComponent(manager.placement)
                    + '&'+ this.consts.PTD_FILTER + '=' + encodeURIComponent(manager.placement)
                    + this.CheckIfExistAndAppendQS(this.adsToFilter.join(), this.consts.AD_FILTER)
                    + this.CheckIfExistAndAppendQS(this.campaignsToFilter.join(), this.consts.CMP_FILTER)
                    + this.CheckIfExistAndAppendQS(this.advertisersToFilter.join(), this.consts.ADV_FILTER)
                );
            }

        }
        setTimeout("PostRelease.ISMonitor()", 250);
    }


    this.TryRenderAd = function () {
        var displayed = 0;
        for (var i = 0; i < prxAds.length; i++) {
            var a = prxAds[i];

            // check if we can find the node to inject into
            if (a.InjectNode == undefined) {
                if (q(a.RenderSelector).length > 0) {
                    a.InjectNode = q(a.RenderSelector).first();

                    // we might be asked to go higher then the selector
                    if (a.ParentCount && a.ParentCount > 0) {

                        var topWindow = PostRelease.getTopWindow();
                        // first check if we are inside iframe
                        if (window != topWindow) {
                            var topFrame = window;
                            while (topFrame.parent != topWindow)
                                topFrame = window.parent;

                            // make sure we inject in the right context
                            if (topWindow.prdom)
                                prdom = topWindow.prdom;

                            // now find this frame in the top DOM
                            domElement = null;
                            for (var i = 0; i < topWindow.frames.length; i++) {
                                try {
                                    if (topWindow.frames[i] == topFrame)
                                        domElement = topFrame.frameElement;
                                }
                                catch (e) { }
                            }

                            if (domElement)
                            {
                                prdom.win = topWindow;
                                a.InjectNode = q(domElement);

                                // iframe replace should collpase the iframe instead so
                                // the iframe context is not gone
                                if (a.InjectionMode == 1)
                                    a.InjectionMode = 4;
                            }
                        }

                        // now move up x amount of time
                        var pCount = a.ParentCount;
                        while (a.InjectNode.parent() && pCount > 0) {
                            pCount--;
                            a.InjectNode = a.InjectNode.parent();
                        }
                    }

                    PostRelease.InsertAd(a);
                }
            }

            // update which were aleady displayed
            displayed = displayed + (a.InjectNode ? 1 : 0);
        }

        // if we didn't display all ads yet try again later
        if (displayed < prxAds.length) {
            setTimeout('PostRelease.TryRenderAd()', 100);
        }
    }

    this.InsertAd = function (a) {
        switch (a.InjectionMode) {
            case 0: // before
                a.InjectNode.before(a.RenderHtml);
                break;
            case 1: // replace
                a.InjectNode.replaceWith(a.RenderHtml);
                break;
            case 2: // after/append
                a.InjectNode.after(a.RenderHtml);
                break;
            case 3: // prepend
                a.InjectNode.prepend(a.RenderHtml);
                break;
            case 4: // collpase and inject before
                q(a.InjectNode).hide();
                a.InjectNode.before(a.RenderHtml);
                break;
        }
    }

    var getAuthorLinkHtml = function(url, label){
        return '<a href="' + url + '" target="_blank">' + label + '</a>';
    }

    this.Render_TemplateAd = function (adPackage) {

        document.title = adPackage.Headline;
        adPackage.replaced = false;
        // new b page support, based on fragments
        if (adPackage.Fragments && adPackage.Fragments.length > 0) {
            this.TryRenderFragment(adPackage.Fragments, adPackage);
        } else {
            // TODO: can we remove V1 already? what does it take to remove it?
            // support for v1
            if (q('.prx_body').length > 0) {
                q('.prx_title').html(adPackage.Headline);
                q('body *').replaceText(/\bPR_SPONSORED_POST_TITLE\b/gi, adPackage.Headline);
                q('.prx_title_text').html(adPackage.Headline);
                q('a.prx_title_url').attr('href', '#');
                q('a.prx_title').attr('href', '#').attr('title', '').html(adPackage.Headline);
                if (adPackage.HideAuthorLink)
                    q('.prx_author').html(adPackage.AuthorName);
                else
                    q('.prx_author').html(getAuthorLinkHtml(adPackage.AuthorUrl,adPackage.AuthorName));
                q('.prx_author_name').html(adPackage.AuthorName);
                q('a.prx_author_url').attr('href', adPackage.AuthorUrl);
                q('img.prx_image_preview').remove();
                document.title = adPackage.Headline;
                prxContainerElement = q('.prx_body').parent();
                q('.prx_body').html(adPackage.HtmlBody);
                adPackage.replaced = true;
            }
            // support for v2
            if (!adPackage.replaced) {
                q('* :not(iframe)').contents().each(function () {
                    try {
                        if (this.nodeType == 8) {
                            var comment = q.trim(this.data);
                            switch (comment) {
                                case '@Content':
                                    prxContainerElement = q(this).parent();
                                    document.title = adPackage.Headline;
                                    q(this).replaceWith(adPackage.HtmlBody);
                                    adPackage.replaced = true;
                                    break;
                                case '@Title':
                                    q(this).replaceWith(adPackage.Headline);
                                    break;
                                case '@Datetime':
                                    q(this).replaceWith(adPackage.DisplayDate);
                                    break;
                                case '@Author':
                                    if (adPackage.HideAuthorLink)
                                        q(this).replaceWith(adPackage.AuthorName);
                                    else
                                        q(this).replaceWith(getAuthorLinkHtml(adPackage.AuthorUrl,adPackage.AuthorName));
                                    break;
                                case '@AuthorLogo':
                                    var logo = '<img src="' + adPackage.AuthorLogo + '" border="0">';
                                    if (adPackage.HideAuthorLink)
                                        q(this).replaceWith(logo);
                                    else
                                        q(this).replaceWith(getAuthorLinkHtml(adPackage.AuthorUrl,logo));
                                    break;
                                case '@Preview':
                                    q(this).replaceWith(adPackage.PreviewText);
                                    break;
                            }
                        }
                    } catch (err) { }
                });
            }
        }
        if (adPackage.replaced) {
            this.ArticlePostProcessing(adPackage);
        }
        if (/loaded|complete/.test(document.readyState) === false && adPackage.replaced == false) {
            setTimeout(function () { PostRelease.Render_TemplateAd(adPackage) }, 50);
        } else if (!adPackage.replaced) {
            // if the dom is ready, but we were not able to process all fragments, we still need to do post processing and do the removals.
            this.ArticlePostProcessing(adPackage);
        }
    }

    this.ArticlePostProcessing = function(adPackage){
        this.UpdatePagination(adPackage);
        // process removals
        if (adPackage.Removals && adPackage.Removals.length > 0) {
            this.ExecuteRemoval(adPackage.Removals, 100);
        }
        // Protection for non nativo ads inside our ads
        q(window).bind('DOMNodeInserted ready load', function () { PostRelease.disableAdsFromElement(prxContainerElement); });
    }

    this.ReplaceTokens = function(template, ad){
        var logo = '<img src="' + ad.AuthorLogo + '" border="0">';
        template = template.replace(/@Title/g, ad.Headline);
        template = template.replace(/@Datetime/g, ad.DisplayDate);
        template = template.replace(/@AuthorLogo/g, (ad.HideAuthorLink) ?  logo : getAuthorLinkHtml(ad.AuthorUrl,logo));
        template = template.replace(/@Author/g, (ad.HideAuthorLink) ?  ad.AuthorName : getAuthorLinkHtml(ad.AuthorUrl,ad.AuthorName));
        template = template.replace(/@Preview/g, ad.PreviewText);
        template = template.replace(/@Content/g, '<div id="' + ad.ArticleID + '" class="' + ad.ArticleID + '">' + ad.HtmlBody + '</div>');
        template = template.replace(/@BottomArticle/g, "");
        template = template.replace(/@TopArticle/g, "");
        template = template.replace(/@RightRail/g, "");
        return template;
    }

    this.TryRenderFragment = function (fragments, ad) {
        if (!ad.replacedElements) {
            ad.replacedElements = 0;
        }
        for (var i = 0; i < fragments.length; i++) {
            var fragment = fragments[i];
            if (!fragment.InjectNode) {
                if (q(fragment.Selector).length > 0) {
                    var contentInserted = (fragment.FragmentTemplate.indexOf("@Content") > -1) ? true : false;
                    fragment.InjectNode = q(fragment.Selector).first();
                    fragment.RenderHtml = this.ReplaceTokens(fragment.FragmentTemplate, ad);
                    // if it is a companion fragment type and is not replace mode
                    if ( (new RegExp( '\\bTOP\\b|\\bRIGHTRAIL\\b|\\bBOTTOMb\\b')).test(fragment.Type) && fragment.Mode != 1 ){
                        fragment.RenderHtml = q(fragment.RenderHtml).addClass('ntv-companion');
                    } else if (fragment.Type == 'SLIDEMETADATA'){
                        fragment.RenderHtml = q(fragment.RenderHtml).addClass('ntv-gallery-metadata');
                    }
                    fragment.InjectionMode = fragment.Mode;
                    this.InsertAd(fragment);
                    if (contentInserted) {
                        prxContainerElement = q("#" + ad.ArticleID).parent();
                    }
                    ad.replacedElements++;
                }
            }
        }

        if (ad.replacedElements == fragments.length) {
            ad.replaced = true;
        }
    }

    this.ExecuteRemoval = function (removals, tryNumber) {
        var toBeRemoved = [];
        for (var i = 0; i < removals.length; i++) {
            var removal = removals[i];
            if (q(removal.Selector).length > 0) {
                switch (removal.Type) {
                    case 1: // remove
                        q(removal.Selector).remove();
                        break;
                    case 2: // hide
                        q(removal.Selector).css('display', 'none');
                        break;
                }
            } else
                toBeRemoved.push(removal);
        }
        if (toBeRemoved.length > 0 && tryNumber > 0) {
            tryNumber--;
            setTimeout(function () { PostRelease.ExecuteRemoval(toBeRemoved, tryNumber) }, 100);
        }
    }

    
        this.UpdatePagination = (function R(adPackage) {
            var retry = false;
            if (adPackage.paginationNextUrl || adPackage.paginationPreviousUrl) {
                var next = q('a.prx_pagination_next');
                var previous = q('a.prx_pagination_previous');
                if (adPackage.paginationNextUrl != '') {
                    next.attr('href', adPackage.paginationNextUrl).attr('style', 'display:inline');
                }
                else {
                    next.attr('style', 'display:none');
                }

                if (adPackage.paginationPreviousUrl != '') {
                    previous.attr('href', adPackage.paginationPreviousUrl).attr('style', 'display:inline');
                }
                else {
                    previous.attr('style', 'display:none');
                }
                retry = next.length == 0;
            } else {
                var wrapper = q('.prx_pagination_wrapper');
                wrapper.attr('style', 'display:none');
                retry = wrapper.length == 0;
            }
            if (/loaded|complete/.test(document.readyState) === false && retry) {
                setTimeout(function () {
                    R(adPackage);
                }, 100);
            }
        });
    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TRACKING
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    this.checkIsAdVisible = function () {
        var pr = PostRelease;
        if (!ntv.Util.canExecute(pr.checkIsAdVisible, "viewable", 100)) {
            return;
        }
        //check if element with id related-ads is visible on screen
        var n = pr.viewableImpressionTrackers.length;
        for (var i = 0; i < n; i++) {
            var tracker = pr.viewableImpressionTrackers[i];

            // protection in case the array was updated due multi-thread
            if (tracker) {
                tracker.checkViewability();
            }
        }
    }

    this.FindTrackerInfo = function () {
        // see if there is a context key already being used, if so replace the generated one
        var existingRenderOptions = this.GetQS(this.consts.REQ_OPTIONS);
        if (existingRenderOptions != '') this.renderOptions = existingRenderOptions;
        var existingAdvID = this.GetQS(this.consts.ADV_ID);
        if (existingAdvID != '') this.advid = existingAdvID;
        var existingAdVersionPlacementID = this.GetQS(this.consts.AVP);
        if (existingAdVersionPlacementID != '') this.adversionplacementid = existingAdVersionPlacementID;
        var existingPlacementID = this.GetQS(this.consts.PLC_ID);
        if (existingPlacementID != '') this.placementid = existingPlacementID;

        // check if fraud flag is present
        if (q.inArray(this.consts.FRAUD, this.GetUrlVars()) != -1) this.rt = 30;
    };


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // MISC
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // adds scripts to document dynamically
    this.AddScript = function (url) {
        var e = document.createElement('script'); e.type = 'text/javascript'; e.src = this.urlprotocol + '//' + url;
        (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(e);
    };

    this.GetQS = function (key, default_) {
        if (default_ == null) default_ = "";
        key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
        var qs = regex.exec(window.location.href);
        if (qs == null)
            return default_;
        else
            return qs[1];
    };

    this.GetUrlVars = function() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    var openPopupWindow = function(url, windowName){
        window.open(url, windowName, "status=1,width=600,height=400");
        return false;
    }

    this.OpenShareFacebook = function (url) {
        return openPopupWindow(url,"share_facebook");
    };

    this.OpenShareTwitter = function (url) {
        return openPopupWindow(url,"share_twitter");
    };

    this.OpenShareLinkedIn = function (url) {
        return openPopupWindow(url,"share_linkedin");
    };

    this.OpenShareGoogle = function (url) {
        return openPopupWindow(url,"share_google");
    };

    this.OpenSharePinterest = function (url) {
        return openPopupWindow(url,"share_pinterest");
    };

    this.OpenShareStumbleUpon = function (url) {
        return openPopupWindow(url,"share_stumbleupon");
    };


    this.StartUrlChangeMonitor = function () {
        if (!this.articleUrlMonitorRunning) {
            this.articleUrlMonitorRunning = true;
            this.UrlChangeMonitor();
        }
    }

    this.UrlChangeMonitor = function () {
        for (var i = 0; i < this.articleUrlMonitorArr.length; i++) {
            var obj = this.articleUrlMonitorArr[i];
            var active = (window.location.href.indexOf(obj.adVersionPlacement) > 0);
            if (active != obj.urlActive) {
                obj.urlActive = active;
                obj.articleUrlChange();
            }
        }
        setTimeout(function () { PostRelease.UrlChangeMonitor() }, 100);
    }

    this.GetHrefUrl = function (primaryClick, trackFraud) {
        return (trackFraud) ? primaryClick + (prdom.onFocus ? '' : '&' + this.consts.FRAUD) : primaryClick;
    }

    // The viewable inventory tracker needs to be called first in order
    // to infinite scroll logic work.
    this.TrackInventory = function (tracker) {
        if (tracker.infiniteScroll) {
            tracker.selector = this.ISManager[tracker.placementID].getSelector();
        }
        this.inventoryTrackers.push(tracker);
        this.TryTrackInventory();
    }

    this.TryTrackInventory = function () {
        var pr = PostRelease;
        var func = function () { pr.TryTrackInventory(); };
        if (!ntv.Util.canExecute(func, "inventory", 100)) {
            return;
        }
        var totalTracked = 0;
        for (var i = 0; i < pr.inventoryTrackers.length; i++) {
            var tracker = pr.inventoryTrackers[i];
            if (!tracker.tracked) {
                if (q(tracker.selector).length > 0) {
                    tracker.tracked = true;
                    var cacheBursting = "&ord=" + new Date().getTime();
                    var actionType = "303";
                    if (!pr.pageInventoryTracked) {
                        pr.pageInventoryTracked = true;
                        actionType += ",302";
                    }
                    ntvAppendPixelImage(tracker.url + actionType + '&' + this.consts.AVP + '=' + tracker.adVersionPlacement + cacheBursting);
                    if (tracker.passback) {
                        // activate passback
                        this.passbackManager = new ntv.PassbackManager(tracker.passback, tracker.vcpmParams);
                    }
                }
            } else {
                totalTracked++;
            }
        }
        if (totalTracked < pr.inventoryTrackers.length) {
            setTimeout(func, 200);
        }
    }

    // this function will create the video based on the player type.
    this.setupVideo = function(params){
        var renderingParams = params.renderingParams;
        var outerElement = q(this.getTopWindow().document).find('.' + renderingParams.outerCssClass);

        // add the iframe tag if it is not already on the DOM, based on the execution type
        if (renderingParams.videoExecution == 8){ // PRE-EXPANDED video
            outerElement.find('.ntv-play-overlay').remove();
            if (ntv.Util.adBlocker){
                renderingParams.previewImage = renderingParams.previewImage.replace(this.consts.ASSETS_PREFIX + ntv.Util.getServerDomain(), ntv.Util.getServerDomain());
            }
            var previewImg = outerElement.find("img[src*='" + ntv.Util.applyImageResizer(renderingParams.previewImage) + "']");
            if (previewImg.parent().parent().is("a"))
                previewImg.parent().parent().replaceWith(previewImg.parent());
            if (previewImg.parent().is("a"))
                previewImg.parent().replaceWith(previewImg);
            previewImg.replaceWith(renderingParams.iframeTag);
        }


        var player;
        switch (params.playerType) {
            case this.consts.YOUTUBE_PLAYER:
                player = new ntv.YouTubeVideo(params);
                break;
            case this.consts.NATIVO_PLAYER:
            case this.consts.VAST_PLAYER:
                player = new ntv.NativoVideo(params);
                break;
        }
        this.videoPlayers.push(player);

        var linkElem = outerElement.find("." + renderingParams.linkCssClass);
        player.clickedBeforeRendering = false;
        linkElem.map( function() {
            var elem = q(this);
            if (ntv.Util.isNotValidHeadlineLink(elem)){
                elem.click( function() {
                    player.clickedBeforeRendering = true;
                    return false;
                })
                elem.removeAttr("href").css('cursor', 'pointer');
            }
        });
    }


}






/************************************************
	The class is responsible to manage all aspects 
	of passback flow.
 ************************************************/
ntv.PassbackManager = function(passBackParams, viewabilityParams){
	this.vSettings = viewabilityParams;
	this.params = passBackParams;
	this.candidates = [];
	this.vTrackers = [];
	this.consts = PostRelease.consts;
	this.filled = false;
	this.next();
}

ntv.PassbackManager.prototype = {
	// handles the next provider 
	next: function () {
		// we handled the last, nothing to do
		if (this.params.Providers.length == 0)
			return;

		// default is not auto complete
		this.autoFillDetection = false;

		// pop the first from queue
		var passback = this.params.Providers.shift();

		
	    // passback insertion
	    // Head tag is only one
	    if (passback.HeaderTag.length > 0) {
	        prdom.query("head").append(passback.HeaderTag);
	    }

	    // body can represent mulitlple placements
	    if (passback.Placements.length > 0) {
	        for (var i = 0; i < passback.Placements.length; i++) {
	            var placement = passback.Placements[i];

	            var candidate = this.getCandidate(passback);
	            candidate.selector = placement.Selector;
	            candidate.locator = placement.Locator;
	            this.candidates.push(candidate);

	            // track the passback attempt
				this.trackPassback(306, candidate); 

	            this.preInsertion(candidate);

	            // try to inject to body until doc is ready
            	this.tryInjectBody(placement);
	        }
	    }
	    else
	    {
	    	// head only, we can only track attempts
	    	var candidate = this.getCandidate(passback);
	    	this.trackPassback(306, candidate); 
	    }

	    // start monitoring for impression / viewablity etc.
	    this.monitor(30000);
    },

   // generate a candidate object from passback data 
   getCandidate: function(passback) {
   		var candidate = {};
        candidate.providerID = passback.ProviderID;
        candidate.rateType = passback.RateType;
        candidate.amount = passback.Amount;
        candidate.adVersionPlacement = passback.AdVersionPlacement;
        candidate.completed = false;
        return candidate;
   },


   preInsertion: function (candidate) {
   		var data = candidate;
	    var scope = this;
	    switch (candidate.providerID) {
	        case 1: // Sharethrough 
			case 3: // Sharethrough DFP
			case 22: // Sharethrough ajax mode
	        	this.autoFillDetection = true;
	            prdom.query(window).bind("message", function (e) {
	                if (e.originalEvent.origin.indexOf('btlr.sharethrough.com') >= 0) {
	                    setTimeout(function () { scope.validateSTR(data) }, 200);
	                }
	            });
	            break;
	    }
	},

    tryInjectBody: function (placement) {
    	if (prdom.query(placement.Selector).length > 0) {
	        
	    	// we simulate a nativo ad element and use the standard InsertAd method
	        placement.InjectNode = prdom.query(placement.Selector).first();
	        placement.RenderHtml = placement.BodyTag;
	        PostRelease.InsertAd(placement);

	        // TODO: call postInsertion()
	    } else if (/loaded|complete/.test(document.readyState) === false) {
	    	var scope = this;
	        setTimeout(function () { scope.tryInjectBody(placement) }, 50);
	    } 
	},

	validateSTR: function (candidate) {
		var element = prdom.query(candidate.locator);
	    if (element.length > 0) {
	    	var node = element[0];

	        // marking the passback as completed for auto passback if needed
	        candidate.completed = (node.getAttribute('data-str-visited-flag') == 'true');
	    }
	},

	monitor: function(timeLeft) {

		// queue is empty / too much time passed
		if (this.candidates.length == 0 || timeLeft <= 0)
			return;

		for (var i = 0; i < this.candidates.length; i++) {
	        var candidate = this.candidates[i];

	        // some external process will tell us when injection is completed
	        if (this.autoFillDetection && !candidate.completed)
	        	continue;

	        if (candidate.locator)
	        {
	        	var element = prdom.query(candidate.locator);
			    if (element.length > 0) {
			        var width = element[0].offsetWidth;
    				var height = element[0].offsetHeight;

    				// we have injection
    				if (width > 0 && height > 0)
    				{
    					this.filled = true;
    					candidate.completed = true;
    					this.trackPassback(307, candidate); //track passback cpm impression

    					// now also add viewablie tracking
    					this.trackViewable(candidate);
    				}
    				// for auto complete, if element is not visible, it means it was not filled
    				else if (this.autoFillDetection)
    				{
    					this.trackPassback(308, candidate);
    				}
			    }
	        }
	        else {
	        	candidate.completed = true;
	        }
	    }

	    // go over the elements which were completed and remove them
	    var oldQueue = this.candidates;
	    this.candidates = [];
	    for (var i = 0; i < oldQueue.length; i++) {
	    	var candidate = oldQueue[i];
	    	if (!candidate.completed)
	    		this.candidates.push(candidate);
		}


		if (this.autoFillDetection && !this.filled && this.candidates.length == 0) {
	        this.next();// try next provider
	    }
	    else if (this.candidates.length > 0) { // retry next time if we have more waiting
			var scope = this;
			var time = timeLeft-100;
			setTimeout(function () { scope.monitor(time) }, 100);
		}
	},

	getPassbackTrackUrl: function(actionType, passbackUnit)
	{
		// build the URL - amount will only be added for the right impression type
		var extraQS = '';
	    if (	(actionType == 307 && passbackUnit.rateType == 2) || 
	    		(actionType == 309 && passbackUnit.rateType == 3)) {
	        extraQS = '&' + this.consts.VALUE + '=' + passbackUnit.amount;
	    }
	    
	    return this.params.TrackingUrl + actionType + '&' + this.consts.AVP + '=' + passbackUnit.adVersionPlacement  + '&' + 
	    		this.consts.SUB_AT + '=' + passbackUnit.providerID +  extraQS + "&ord=" + new Date().getTime();
	},


	trackPassback: function (actionType, passbackUnit) {
		ntvAppendPixelImage(this.getPassbackTrackUrl(actionType, passbackUnit));
	},

	trackViewable: function (passbackUnit) {
		var parameters = [];
	    parameters.primaryImpressionURL = this.getPassbackTrackUrl(309, passbackUnit);
	    parameters.thirdPartyTrackingTags = "";
	    parameters.selector = passbackUnit.locator;
	    parameters.minimumAreaViewable = this.vSettings.minimumAreaViewable;
	    parameters.minimumExposedTime = this.vSettings.minimumExposedTime;
	    parameters.checkOnFocus = this.vSettings.checkOnFocus;
	    parameters.checkMinimumAreaViewable = this.vSettings.checkMinimumAreaViewable;
	    parameters.infiniteScroll = false;
	    this.vTrackers.push(new ntvViewableImpressionTracker(parameters));
	}
}













_pr.prototype.disableAdsFromElement = function (element) {
    /* Remove link-based ads from NTV units */
    // Detect NTV units
    var ntv_ad = prdom.query(element);
    ntv_ad.removeClass(function (index, css) { return (css.match(/\bitxt\S+/g) || []).join(' '); });
    // Remove all references to Vibrant
    ntv_ad.find("[class*='itxt']").replaceWith(function () { return nQuery(this).text() });

    // other vendors (legacy?)
    ntv_ad.find(".kLink").replaceWith(function () { return nQuery(this).text() });
    ntv_ad.find(".IL_AD").replaceWith(function () { return nQuery(this).text() });
    //ntv_ad.find("div#picad_div").remove();
    //ntv_ad.find("#picad_overlay_div").remove();
    //ntv_ad.find(".GG_ad").remove()
}// This function requires a json object as parameter, and it should have the following properties:
// params.selector
// params.aqID
// params.adID
// params.adVersionID
// params.adVersionPlacement
// params.placementID
// params.psID
// params.baseTrackingUrl
// params.isViewableSecondaryImpression
// params.secondaryImpressionTags
// params.videoStartTags
// params.videoEndTags
// params.videoProgress25PercentTags
// params.videoProgress50PercentTags
// params.videoProgress75PercentTags

function ntvArticleTracker(params) {
    ntv.Util.copyProperties(params,this);
    this.element = null;

    this.tracker = new ntvTrackingUrlUtil(params, this);

    // time on content vars
    this.resetTimeOnContentVars();

    // image resizer var
    this.maxWidth = 0;

    if (this.multiArticlesInPage) {
        this.urlActive = false;
        PostRelease.articleUrlMonitorArr.push(this);
        PostRelease.StartUrlChangeMonitor();
    }

     this.init();
}

ntvArticleTracker.prototype.resetTimeOnContentVars = function () {
    if (this.trackTimeOnContent) {
        this.tos = new ntvTimeOnContentStopWatch(this);
    }
}

ntvArticleTracker.prototype.init = function () {
    if (!prdom.query) {
        prdom.query = nQuery.noConflict(true);
    }
    this.element = prdom.query(eval(this.selector))[0];
    var obj = this;
    obj.videoPlayers = {};
    // we can only start tracking once we get the container element
    if (!this.element) {
        setTimeout(function () { obj.init(); }, 100);
    }
    else {
        var q = prdom.query;
        // bind events
        if (this.trackTimeOnContent) {
            q(window).bind('scroll DOMNodeInserted', function () { obj.trackTime(); });
        }
        q(window).bind('ready load resize orientationchange', function () { obj.resize(); });

        q("iframe").map(function() {
            var elem = q(this);
            if (elem.attr('id') != "prx_full_ad_video" && !elem.hasClass("prx_full_ad_video")){
                return;
            }
            var rand = Math.floor((Math.random() * 1000000) + 1);
            var outerCss = 'ntv-video-wrapper'+ obj.adID +'_'+ rand;
            var videoUrl = elem.prop('src');
            var videoWidth = elem.prop('width');
            var videoHeight = elem.prop('height');
            var src = "";
            if (ntv.Util.isIE()) {
                src = "javascript:document.write('<head><script>document.domain=\\'" + PostRelease.getTopWindow().document.domain + "\\';</script></head><body></body>');window.parent['ntvAT"+ obj.adID +"'].videoPlayers["+ rand +"].init();";
                src = 'src="' + src +'"';
            }

            elem.replaceWith('<div class="ntv-video-wrapper'+ obj.adID +' '+ outerCss+' ntv-video-wrapper"><iframe id="ntvVideoIframe'+ obj.adID +'" width="'+ videoWidth+'" height="'+ videoHeight+'" ' + src + '  frameborder="0" allowfullscreen></iframe></div>');
            var videoParams = q.extend(true, {}, obj); // clone the object
            videoParams.trackTimeOnContent = false;
            videoParams.tos = null;
            // We found a bug that if the YT player starts playing before we create the YT iframe player object,
            // we lose the player controls and we therefore cannot do correct tracking. The solution was to remove
            // auto play from the video URL, and do it once the player object is ready
            if (videoUrl.indexOf('&autoplay=1') > 0){
                videoUrl = videoUrl.replace('&autoplay=1','');
                videoParams.playerVarsAutoPlay = 1;
            }
            videoParams.iframeBody = '<div class="video-wrapper"><iframe frameborder="0" width="'+videoWidth+'" height="'+videoHeight+'" ntv-aspect-ratio="16:9" id="ntvVideo" src="'+videoUrl+'&showsearch=0&showinfo=0&playlist=&modestbranding=1&autohide=1&egm=0&rel=0&wmode=opaque" type="text/html" style="float:none;clear:both;" allowfullscreen ></iframe></div>';
            videoParams.iframeHead = '<style>body{top:0px;left:0px;margin:0;}</style>';
            videoParams.renderingParams = { outerCssClass : outerCss, previewImage: "", article: 1};
            obj.videoPlayers[rand] = new ntv.YouTubeVideo(videoParams);
        }).get();

        // start what can start right away
        this.trackTime();
        this.resize();
        setTimeout(function () { obj.resize(), 1000 });
    }
}

ntvArticleTracker.prototype.trackTime = function () {
    if (this.trackTimeOnContent) {
        if (this.expandableUnit){
            return; // expandable should only track once the unit is opened.
        }
        if (this.multiArticlesInPage) {
            if (this.urlActive) {
                this.tos.resume();
                this.trackSecondaryImpression();
            }
        } else {
            this.tos.resume();
            this.trackSecondaryImpression();
        }
    } else {
        this.trackSecondaryImpression();
    }
}

ntvArticleTracker.prototype.trackSecondaryImpression = function () {
    if (!this.trackedSecondaryImpression) {
        this.trackedSecondaryImpression = true;
        var actionTypes = null;
        if (this.expandableUnit) {
            actionTypes = [this.tracker.readAndClickActionTypes, this.tracker.ArticlePageViewActionType];
        } else {
            // only track nativo secondary impression if viewable secondary impression
            actionTypes = this.multiArticlesInPage ?
                [this.tracker.secondaryImpressionActionType, this.tracker.ArticlePageViewActionType] : // if multiple articles, track secondary impression and ArticlePageView
                this.trackTimeOnContent ?
                    [this.tracker.ArticlePageViewActionType] : // if regular article, track ArticlePageView, as secondary impression is tracked on the server side
                    null; // if video, don't track anything as ArticlePageViewActionType is tracked once the user play the video for the first time.
        }
        var trackingUrl = (actionTypes != null) ? this.tracker.getUrl(actionTypes.join()) : null;
        ntvInsertTracking(trackingUrl, this.secondaryImpressionTags, 1);
    }
}

// this should only be called when the urlActive flag is updated
ntvArticleTracker.prototype.articleUrlChange = function () {
    if (this.urlActive) {
        this.trackTime();
        this.executeMoat(true);
    } else {
        this.tos.onLeave();
        this.resetTimeOnContentVars();
        this.trackedSecondaryImpression = false;
        this.executeMoat(false);
    }
}

ntvArticleTracker.prototype.executeMoat = function (start) {
    try{
        if (this.moatEnabled){
            var p = document.querySelector('.' + this.moatClass);
            if (start)
                p.initMoatTracking();
            else
                p.stopMoatTracking();
        }
    } catch (e) { }
}

ntvArticleTracker.prototype.visible = function (el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    var docElem = document.documentElement;
    var docBody = document.body;
    var myWidth = window.innerWidth ? window.innerWidth : docElem.clientWidth ? docElem.clientWidth : docBody.clientWidth;
    var myHeight = window.innerHeight ? window.innerHeight : docElem.clientHeight ? docElem.clientHeight : docBody.clientHeight;
    var scrollPos = ntv.Util.getScrollPos();
    var YOffset = scrollPos.top;
    var XOffset = scrollPos.left;

    return (top < (YOffset + myHeight) && left < (XOffset + myWidth) && (top + height) > YOffset && (left + width) > XOffset);
}

ntvArticleTracker.prototype.setMaxWidth = function () {
    // set max width allowed for images
    this.maxWidth = prdom.query(this.element).width();
    // if landscape mode
    var deviceCurrentWidth = (window.orientation && (window.orientation == 90 || window.orientation == -90)) ? screen.height : screen.width;
    if (this.maxWidth == -20 || this.maxWidth > deviceCurrentWidth)
        this.maxWidth = deviceCurrentWidth - 20;
    if (this.maxWidth > 840) this.maxWidth = 840;
    this.maxWidth = Math.ceil(this.maxWidth);
}



ntvArticleTracker.prototype.resize = function () {
    this.setMaxWidth();
    var obj = this;
    var q = prdom.query;

    // the following block of code will keep testing if the div.content is loaded
    q(this.element).find("iframe").map(function () { // JS
        q(this).css('float', 'none');
        q(this).css('clear', 'both');
        var dimensions = ntv.Util.getElementDimensions(this);
        if (dimensions.w == 0 && obj.maxWidth > 0) {
            obj.setVideoSize(this, obj.maxWidth);
        } else {
            var id = q(this).attr('id');
            if (id && id.indexOf('ntvVideoIframe') == 0){
                ntv.Util.setElementDimensions(q(this).parent(),dimensions, obj.maxWidth);
                return; // don' resize if nativo video
            }
            ntv.Util.setElementDimensions(this,dimensions, obj.maxWidth);
        }
        obj.setVideoContainerSize(this);
        q(this).show(); //display when iframe has fully loaded
    }).get();
    q(this.element).find("video").map(function () {
        var dimensions = ntv.Util.getElementDimensions(this);
        if (dimensions.w == 0 && obj.maxWidth > 0) {
            obj.setVideoSize(this, obj.maxWidth);
        }
        obj.setVideoContainerSize(this);
    }).get();
    q(this.element).find("img").map(function () { // JS
        var src = q(this).attr('data-original');
        if (!src) {
            var dimensions = ntv.Util.getElementDimensions(this);
            if (dimensions.w == 0 || dimensions.h == 0){
                return; // image is not fully loaded
            }
            ntv.Util.setElementDimensions(this,dimensions, obj.maxWidth);
        } else {
            if (obj.maxWidth > 0) {
                src = ntv.Util.applyImageResizer(src);
                src += "?mode=max&width=" + obj.maxWidth;
                q(this).attr('src', src);
                q(this).css("width", "").css("height", "").css("max-width", "").css("max-height", ""); // remove dimensions styling
            }
        }
        q(this).show(); //display when img has fully loaded
    }).get();
    if (obj.videoPlayers){
        for (var prop in obj.videoPlayers) {
            if (obj.videoPlayers[prop].videoRendering) {
                obj.videoPlayers[prop].videoRendering.resizeIframe();
            }
        }
    }
}

ntvArticleTracker.prototype.setVideoSize = function (element, maxWidth) {
    var aspectRatio = prdom.query(element).attr('ntv-aspect-ratio');
    aspectRatio = (aspectRatio != undefined) ? aspectRatio.split(":") : [16, 9];
    var w = maxWidth;
    var h = Math.ceil(aspectRatio[1] * maxWidth / aspectRatio[0]);
    prdom.query(element).attr('height', h);
    prdom.query(element).attr('width', w);
    prdom.query(element).width(w).height(h);
}

ntvArticleTracker.prototype.setVideoContainerSize = function (element) {
    var element = prdom.query(element);
    var parent = element.parent();
    if (parent.attr('class') && parent.attr('class').indexOf('ntv-video-wrapper') >= 0) {
        var h = element.attr('height');
        var w = element.attr('width');
        if (h > 0 && w > 0)
            parent.width(w).height(h);
    }
}

ntvArticleTracker.prototype.onArticleExpand = function () {
    this.tos.resume();
    this.trackSecondaryImpression();
}

ntvArticleTracker.prototype.onArticleCollapse = function () {
    this.tos.stopAndTrack();
    for (var playerId in this.videoPlayers){
        var player = this.videoPlayers[playerId];
        if (player.getCurrentTime() > 0){
            player.pause();
        }
    }
}
// This function requires a json object as parameter, and it should have the following properties:
// params.cssRule
// params.adID
// params.adVersionID
// params.adVersionPlacement
// params.placementID
// params.baseTrackingUrl
// params.videoStartTags
// params.videoEndTags
// params.videoProgress25PercentTags
// params.videoProgress50PercentTags
// params.videoProgress75PercentTags
// params.trackTimeOnContent
// params.recordType
// params.videoPlayed15Seconds
// params.videoPlayed30Seconds
//
// In order to extent this class you will need to implement the methods:
// postInitHook, postVideoRenderingHook, play, pause, reset, isSeeking, isFullScreen, setUserActive, getCurrentTime, getDuration
// and bind the player to the following events:
// onPlay, onPause, onEnd, onProgress
// You will also need to implement the logic to trigger the following events:
// ntvPlayerReady - when the player is ready
// ntvUserActive - when the user is active so we show the info top bar
// ntvUserInactive - when the user is NOT active so we hide the info top bar
// ntvFullScreenChange
// The child classes need to call the parent init with the firefox protection
ntv.Video = function(params){
    if (!params.hasOwnProperty("recordType")) {
        params.recordType = 30; // default type for video tracker is potential fraud
    }
    var scope = this;
    ntv.Util.copyProperties(params,scope);
    scope.tracker = new ntvTrackingUrlUtil(scope, scope);
    scope.trackingEnabled = true;
    scope.videoTrackers = {};
    scope.actionReported = {};
    scope.lastProgress = 0;
    scope.userInteracted = false;
    scope.intervalID = -1; // used to set interval for tracking on progress
    scope.stopWatch = new ntvStopWatch();
    if (scope.autoPlayParams){
        scope.autoPlayParams.player = scope;
    };
    /*
    scope.autoPlayParams = {
        minViewableArea: 0.3,
        minViewableAreaTime: 1000,
        player: scope,
        onOutOfScreen: 2,
        onVideoEnd: 2,
        onClickVolume: 0.4,
        onClickRestart: true
    };
    */

    if (scope.autoPlayParams && scope.autoPlayParams.onOutOfScreen == 0){
        delete scope.autoPlayParams;
    }

    scope.videoViewDelay = scope.videoViewDelay || 0;
    scope.videoBillableViewDelay = scope.videoBillableViewDelay || 0;

    var readAndClickAT = scope.tracker.readAndClickActionTypes;

    var otherStartActions = "";
    if (scope.trackTimeOnContent){
        otherStartActions += "," + scope.tracker.ArticlePageViewActionType;
    }
    if (scope.videoViewDelay == 0){
        otherStartActions += "," + scope.tracker.videoView + "," + scope.tracker.videoViewManualStart;
        scope.videoStartTags += scope.videoViewTags;
    }

    if (scope.videoBillableViewDelay == 0){
        otherStartActions += "," + scope.tracker.videoBillableView;
    }

    var t = scope.videoTrackers;
    t[56] = { AT:"56" + otherStartActions, eventName:"Start", tags:scope.videoStartTags};
    t[39] = { AT:39, eventName:"FirstQuartile", tags:scope.videoProgress25PercentTags};
    t[40] = { AT:40, eventName:"Midpoint", tags:scope.videoProgress50PercentTags};
    t[41] = { AT:41, eventName:"ThirdQuartile", tags:scope.videoProgress75PercentTags};
    t[23] = { AT:23, eventName:"Complete", tags:scope.videoEndTags};
    t[48] = { AT:48, eventName:"HeadlineClick", tags:""};
    t[55] = { AT:55, eventName:"ClickToUnMute", tags:""};
    t[22] = { AT:22, eventName:"VideoView", tags:scope.videoViewTags};
    t[58] = { AT:58, eventName:"VideoBillableView", tags: ""};
    t[57] = { AT:57, eventName:"VideoViewManualStart", tags:""};
    t[readAndClickAT] = { AT:readAndClickAT, eventName:"ReadAndClick", tags:scope.secondaryImpressionTrackingTags};
    t[2] = { AT:2, eventName:"Read", tags:scope.secondaryImpressionTrackingTags};
    t[3] = { AT:3, eventName:"Click", tags:""};
    t[60] = {AT:60, eventName:"VideoPlayed15Seconds",tags:scope.videoPlayed15Seconds};
    t[61] = {AT:61, eventName:"VideoPlayed30Seconds",tags:scope.videoPlayed30Seconds};

    scope.doc = prdom.query(PostRelease.getTopWindow().document).find("." + this.renderingParams.outerCssClass);
    scope.iframe = scope.doc.find("#ntvVideoIframe" + scope.adID); // iframe that will have the video
};

ntv.Video.prototype = {

    init: function () {
        var scope = this;
        var q = prdom.query;

        // try to add the video
        try {
            // insert the content inside the iframe dynamically
            var iframeDoc = ntv.Util.writeIframe(scope.iframe, 'style="overflow: hidden"', scope.iframeHead, scope.iframeBody);

            scope.iframe.attr('scrolling', "no");

            scope.trackVideoView();
            if (scope.trackTimeOnContent) {
                scope.tos = new ntvTimeOnContentStopWatch(scope);
            }
            scope.doc.bind('ntvPlayerReady', function (e, adID) {
                if (adID == scope.adID) {
                    scope.setupAutoPlay();
                    scope.postVideoRenderingHook();
                }
            });

            scope.iframeContent = q(iframeDoc); // the iframe content that will have the video
            scope.iframeBodyElement = scope.iframeContent.find("body");

            scope.postInitHook();
        } catch (e) {
            console.log(e);
            setTimeout(function() { scope.init()}, 100);
        }

        // try to add the video share for mobile if needed
        if (scope.mobileShareParams && !scope.addedMobileShare){
            scope.addedMobileShare = true;
            scope.mobileShareParams.player = this;
            scope.mobileShare = new ntv.VideoMobileShare(scope.mobileShareParams);
        };
    },

    // this function checks if the iframe content changed, and if so calls init again, restarting the player
    validateIframe: function () {
        var iframeDoc = this.iframe.contents()[0] || this.iframe[0].contentWindow.document;
        var iframeBodyElement = prdom.query(iframeDoc).find("body");
        if (iframeBodyElement.length == 0 || iframeBodyElement.children().length == 0) {
            this.init();
        }
    },

    // abstract, needs to be implemented on child classes
    //postInitHook: function(){},

    // abstract, needs to be implemented on child classes
    //postVideoRenderingHook: function(){},

    // abstract, needs to be implemented on child classes
    //play: function(){},

    // abstract, needs to be implemented on child classes
    //pause: function (){},

    // abstract, needs to be implemented on child classes
    //reset: function (){},

    // abstract, needs to be implemented on child classes
    // isSeeking: function() {}

    // abstract, needs to be implemented on child classes
    // isFullScreen: function(){}

    // abstract, needs to be implemented on child classes
    //setUserActive = function(active){}

    // abstract, needs to be implemented on child classes
    // it should return the video current position
    //getCurrentTime: function () {},

    // abstract, needs to be implemented on child classes
    // it should return the video duration
    //getDuration: function () {},

    // abstract, needs to be implemented on child classes
    // it should mute the player
    //mute = function(){}

    // abstract, needs to be implemented on child classes
    // it should unmute the player
    //unMute = function(){}

    // abstract, needs to be implemented on child classes
    // it should set the player volume
    //setVolume = function(volume){}

    // abstract, needs to be implemented on child classes
    // it should get the player volume
    //getVolume = function(){}

    toggle: function () {
        this.playing ? this.pause() : this.play();
    },

    // should be called when the play button was clicked
    onPlayIntent: function(){
        this.trackReadAndClick();
    },

    startTimeTracking : function(){
        if (this.tos){
            this.tos.resume();
        }
        this.stopWatch.resume();
    },

    stopTimeTracking : function(){
        if (this.tos){
            this.tos.stopAndTrack();
        }
        this.stopWatch.stop();
    },

    // should be called when the video actually started playing
    onPlay: function() {
        var scope = this;
        if (scope.trackingEnabled) {
            scope.startTimeTracking();
        }
        scope.trackReadAndClick();
        scope.trackAction(scope.tracker.videoStartActionType);
        scope.reportPlayingStatus(true);
    },

    onPause: function() {
        var scope = this;
        if (scope.trackingEnabled) {
            scope.stopTimeTracking();
        }
        if (scope.canShowRenderingOverlays()) {
            scope.reportPlayingStatus(false);
        }
        scope.onUserInteracted();
        if (scope.mobileShare) {
            scope.mobileShare.openModalSharePopup();
        }
    },

    onStop: function() {
        var scope = this;
        var ar = scope.actionReported;
        // if tracking is not enabled or the video never start, it doesn' make sense execute onStop
        if (!this.trackingEnabled || !ar[56]){
            return;
        }
        scope.stopTimeTracking();
        if (ntv.Util.isAndroidTablet() || !(scope.getDuration() > 0)) {
            // for android tablet, or when we cannot get the video length
            // whenever they finish the video we try to track the other quartiles if they not yet tracked
            scope.trackAction(39);
            scope.trackAction(40);
            scope.trackAction(41);
        }
        scope.trackAction(scope.tracker.videoEndActionType);
        scope.playing = false;
        // reset tracking to make it fire again, for actions that can fire more than once
        ar[22] = false; // VideoView
        ar[56] = false; // Start
        ar[39] = false; // FirstQuartile
        ar[40] = false; // Midpoint
        ar[41] = false; // ThirdQuartile
        ar[23] = false; // Complete
        ar[57] = false; // VideoViewManualStart
        ar[58] = false; // VideoBillableView
        ar[60] = false; // 15 Second Mark
        ar[61] = false; // 30 Second Mark
        scope.lastProgress = 0;
        scope.stopWatch.reset();
        scope.trackVideoView();
        if (scope.mobileShare) {
            scope.mobileShare.openModalSharePopup();
        }
    },

    onProgress: function () {
        var scope = this;
        var position = scope.getCurrentTime(); //get video position
        var duration = scope.getDuration(); //get video duration
        var currentProgress = Math.round(position / duration * 100); //calculate % complete, rounded to a whole number
        scope.checkProgress({current: currentProgress, last:scope.lastProgress, val:25, action:scope.tracker.videoProgress25PercentActionType});
        scope.checkProgress({current: currentProgress, last:scope.lastProgress, val:50, action:scope.tracker.videoProgress50PercentActionType});
        scope.checkProgress({current: currentProgress, last:scope.lastProgress, val:75, action:scope.tracker.videoProgress75PercentActionType});
        scope.checkProgress({timestamp: position, mark: 15, duration: duration, action: scope.tracker.videoPlayed15SecondsType});
        scope.checkProgress({timestamp: position, mark: 30, duration: duration, action: scope.tracker.videoPlayed30SecondsType});
        scope.lastProgress = currentProgress;
        if (scope.autoPlayTracker){
            if (scope.lastVolume != scope.getVolume()) {
                scope.onUserInteracted();
                scope.lastVolume = scope.getVolume();
            }
        }
    },

    // utility function to bind to onProgress if the player doesn't have an event for when the video duration changes
    bindOnProgress: function(){
        var scope = this;
        var doc = scope.doc;
        doc.bind('ntvVideoStart', function (e, adID) {
            if (adID == scope.adID && scope.intervalID == -1){
                scope.intervalID = setInterval(function () { scope.onProgress() }, 150);
            }
        });

        doc.bind('ntvVideoComplete', function (e, adID) {
            if (adID == scope.adID && scope.intervalID != -1){
                clearInterval(scope.intervalID);
                    scope.intervalID = -1;
            }
        });
    },

    onUserInteracted: function(){
        var scope = this;
        if (!scope.userInteracted){
            scope.userInteracted = true;
            scope.triggerEvent("ntvUserInteracted");
        }
    },

    checkProgress: function (progress) {
        if("current" in progress){
                    if (progress.current >= progress.val 
                            && progress.current < progress.val+10 
                            && progress.last > progress.val-10 && progress.last < progress.current) {
                        this.trackAction(progress.action);
                    }
        }else if("timestamp" in progress){
            if(progress.timestamp >= progress.mark 
                && progress.timestamp < (progress.mark+1)){
                    this.trackAction(progress.action);
            }
        }

    },

    trackAction: function(val) {
        if (prdom.onFocus) this.recordType = 1;
        if (!this.actionReported[val] && this.trackingEnabled) {
            this.actionReported[val] = true;
            var tracker = this.videoTrackers[val];
            if (tracker) {
                ntvInsertTracking(this.tracker.getUrl(tracker.AT), tracker.tags || "", 1);
                this.triggerEvent("ntvVideo"+ tracker.eventName);
            }
        }
    },

    trackReadAndClick: function(){
        if (!this.renderingParams.article && !this.autoPlayParams) {
            this.trackAction(this.tracker.readAndClickActionTypes); // only track on the tout page
        } else if (this.autoPlayParams){
            this.trackAction(this.tracker.secondaryImpressionActionType ); // for auto play we only track the read here
        }
    },

    trackVideoView: function(){
        var scope = this;
        var ar = scope.actionReported;
        var recursiveCall = false;
        // video view
        if (scope.videoViewDelay > 0 && !ar[scope.tracker.videoView]){
            if (scope.stopWatch.duration() < scope.videoViewDelay){
                setTimeout(function () {
                    scope.trackVideoView();
                }, 100);
                recursiveCall = true;
            } else {
                if ((!scope.autoPlayParams || scope.userInteracted)
                    && scope.videoTrackers[scope.tracker.videoView].AT == scope.tracker.videoView){
                    scope.videoTrackers[scope.tracker.videoView].AT += ',' + scope.tracker.videoViewManualStart;
                }
                this.trackAction(scope.tracker.videoView)
            }
        }
        // video billable view
        if (scope.videoBillableViewDelay > 0 && !ar[scope.tracker.videoBillableView]){
            if (scope.stopWatch.duration() < scope.videoBillableViewDelay){
                if (!recursiveCall) {
                    setTimeout(function () {
                        scope.trackVideoView();
                    }, 100);
                }
            } else {
                this.trackAction(scope.tracker.videoBillableView)
            }
        }

    },

    headlineClicked : function(){
        this.trackAction(this.tracker.videoHeadlineClick)
    },

    turnOffAutoPlay: function(){
        var scope = this;
        scope.trackAction(scope.tracker.clickToUnMute);
        scope.trackAction(scope.tracker.clickActionType);
        if (scope.videoViewDelay == 0){
            scope.trackAction(scope.tracker.videoViewManualStart);
        } else if (scope.stopWatch.duration() > scope.videoViewDelay){
            scope.trackAction(scope.tracker.videoViewManualStart);
        }
    },

    reportPlayingStatus: function(status){
        if (status) {
            this.triggerEvent("ntvPlayerPlay");
        } else {
            this.triggerEvent("ntvPlayerPause");
        }
        this.playing = status;
    },

    triggerEvent: function(eventName){
        this.doc.trigger(eventName, [this.adID, this.getVolume()]);
    },

    // this function needs to be called after the player is ready
    setupSkin: function(){
        var params = this.renderingParams;
        params.player = this;
        if (!this.videoRendering) {
            this.videoRendering = new ntv.VideoRendering(params);

        }
    },

    canShowRenderingOverlays: function(){
        var ar = this.actionReported;
        // not auto player, or user interacted or show end screen setting and the video completed
        return !this.autoPlayTracker || this.userInteracted || (this.autoPlayParams.onVideoEnd == 1 && ar[23]);
    },

    setupAutoPlay: function(){
        if (!this.autoPlayParams || this.renderingParams.videoExecution != 8 || this.renderingParams.mobile){ // only run autoplay if it was set and video execution is inline
            return;
        }
        this.lastVolume = this.getVolume();
        this.autoPlayParams.playerElement = this.iframe[0];
        this.autoPlayTracker = new ntv.VideoAutoPlayTracker(this.autoPlayParams);

    }

};// Requires video.js

ntv.NativoVideo = function(params){
    ntv.Video.call(this, params);
    var q = prdom.query;
    var scope = this;
    scope.renderingParams.autoplay = true; // force autoplay, as it only applies to YT
    var doc;
    var player;
    var onAutoPlayerUserInteraction;

    // =======================================================================================
    //                         Private functions
    // =======================================================================================

    var bindPlayerEvents = function (player ){
        player.on('play', function () { scope.onPlay(); });
        player.on('pause', function () {scope.onPause()});
        player.on('ended', function () {scope.onStop()});
        player.on('timeupdate', function () {scope.onProgress()});
        player.on('useractive', function () {scope.triggerEvent('ntvUserActive')});
        player.on('userinactive', function () {scope.triggerEvent('ntvUserInactive')});
        player.on('fullscreenchange', function () {scope.triggerEvent('ntvFullScreenChange')});
        scope.triggerEvent("ntvPlayerReady");
    };

    var onPlayerReady = function(player){
        // all the necessary binding
        scope.trackingEnabled = !scope.vastAsMainSource;
        if (scope.resize){ // resize the player once it is loaded
            scope.resize();
        }
        var c = q(doc);
        if (scope.vastUrl.length > 0){
            player.ads();
            player.vast({
                url: scope.vastUrl,
                playAsMainSource: scope.vastAsMainSource
            });
            player.on('adsready', function() {
                // on vast ready, set the clickthrough and click trackers
                var clickthrough;
                if (player.vastTracker.clickThroughURLTemplate) {
                    clickthrough = VASTUtil.resolveURLTemplates(
                        [player.vastTracker.clickThroughURLTemplate],
                        {
                            CACHEBUSTER: Math.round(Math.random() * 1.0e+10),
                            CONTENTPLAYHEAD: player.vastTracker.progressFormated()
                        }
                    )[0];
                }
                if (clickthrough){
                    c.find('.ntvLearnMore').attr('href',clickthrough);
                }
                c.find('.ntvLearnMore').click( function(){
                    var clicktrackers = player.vastTracker.clickTrackingURLTemplate;
                    if (clicktrackers) {
                        player.vastTracker.trackURLs([clicktrackers]);
                    }
                });
                // hook the video start action to happen when the video played the first frame
                player.on('timeupdate', function () {
                    if (!scope.actionReported[56] && player.currentTime() > 0){
                        scope.onPlay();
                    }
                });
                if (scope.vastAsMainSource) {
                    player.src(player.vast.sources);
                }
            });
            var onVastStart = function(){
                scope.trackingEnabled = scope.vastAsMainSource; // enable tracking, which should only happen for the main content
                bindPlayerEvents(player);
                scope.trackingEnabled ? scope.startTimeTracking() : scope.stopTimeTracking();
                c.find('.vast-skip-button').css('z-index', 10).css('cursor', 'pointer').css('position', 'absolute');
            }
            var onVastStop = function(){
                scope.trackingEnabled = !scope.vastAsMainSource; // disable tracking, which should only happen for the main content
                if (!scope.trackingEnabled) {
                    scope.stopTimeTracking();
                } else {
                    setTimeout(function() {
                        scope.play();
                    }, 200);
                }
            }

            player.on('vast-preroll-ready', onVastStart);
            player.on('vast-preroll-removed', onVastStop);
            player.on('adscanceled', onVastStop);

        }
        var controlSpliterDiv = '<div class="control-spliter"></div>';
        var controlSpliterDivFloatRight = '<div class="control-spliter" style="float:right"></div>';
        var playControlClass = '.vjs-play-control';
        var muteControlClass = '.vjs-mute-control';
        c.find(playControlClass).after(c.find(muteControlClass));
        c.find(playControlClass).after(controlSpliterDiv);
        c.find(muteControlClass).after(c.find(".vjs-volume-control"));
        c.find(muteControlClass).after(controlSpliterDiv);
        c.find(".vjs-fullscreen-control").after(controlSpliterDivFloatRight + '<div class="share-btn-bottom vjs-control"></div>' +  controlSpliterDivFloatRight);
        c.find(".vjs-big-play-button").remove();
        c.find(".top-share-btn").remove();

        //setup skin
        scope.setupSkin();

        if (scope.vastUrl.length == 0) {
            bindPlayerEvents(player);
        }
    };

    // =======================================================================================
    //                         Public functions
    // =======================================================================================

    // this function will be called after the parent init function is executed
    this.postInitHook = function(){
        doc = scope.iframeContent[0];
        var win = doc.defaultView || doc.parentWindow;
        ntvAppendStylesheet("ntvPlayerCss", scope.playerCssUrl, doc);
        ntv.Util.appendScript(scope.videojsUrl, function () {
            win.videojs("ntvVideo", {"controls": true, "inactivityTimeout": 1000,}).ready(function () {
                player = this;
                onPlayerReady(player)
            });
        }, "ntv-videojs", doc);
    }

    this.postVideoRenderingHook = function(){
        q(doc).find('.top-share-btn').remove();
    }

    this.play = function (){
        this.onPlayIntent();
        player.play();
    }

    this.pause = function (){
        player.pause();
    }

    this.toggle = function () {

        if (onAutoPlayerUserInteraction){ //if auto play mode, we don' toggle but call the function for AutoPlayerUserInteraction
            onAutoPlayerUserInteraction();
        } else {
            this.playing ? player.pause() : player.play();
        }
    }

    this.reset = function (){
        player.pause();
        player.currentTime(0);
    }

    this.isSeeking = function() {
        return player.seeking();
    }

    this.isFullScreen = function(){
        return player.isFullscreen();
    }

    this.setUserActive = function(active){
        return player.userActive(active);
    }

    this.getCurrentTime = function () {
        return player.currentTime() || NaN;
    }

    this.getDuration = function () {
        return player.duration() || NaN;
    }

    this.playFullScreen = function() {
        player.enterFullWindow()
    }

    this.mute = function(){
        player.muted(true);
    }

    this.unMute = function(){
        player.muted(false);
    }

    this.setVolume = function(volume){
        player.volume(volume);
    }

    this.getVolume = function(){
        return player.volume();
    }

    this.bindAutoPlayerUserInteraction = function(func){
        this.iframeContent.bind('mouseup', func);
        onAutoPlayerUserInteraction = func;
    }

    this.unbindAutoPlayerUserInteraction = function(){
        this.iframeContent.unbind('mouseup');
        onAutoPlayerUserInteraction = undefined;
    }


    // init the player
    ntv.Util.runWithFirefoxIframeProtection(this.iframe, function() { scope.init() }, function() {scope.validateIframe() });

}
ntvExtends(ntv.Video,ntv.NativoVideo);
// Requires video.js

ntv.YouTubeVideo = function(params) {
    ntv.Video.call(this, params);
    var scope = this;
    var q = prdom.query;
    var player;
    var state;

    // =======================================================================================
    //                         Private functions
    // =======================================================================================

    // bind the YT events
    var onPlayerStateChange = function(event) {
        state = event.data;
        if (event.data == YT.PlayerState.PLAYING) {
            scope.onPlay();
        } else if (event.data == YT.PlayerState.ENDED) {
            scope.onStop();
        } else if (event.data == YT.PlayerState.PAUSED) {
            setTimeout(function() {
                if (state == YT.PlayerState.PAUSED) {
                    scope.onPause()
                }
            }, 200); // add a small delay in case of seeking, as it pauses, buffer and play right away
        }
    };

    // when the player is ready, bind the YT events
    var onPlayerReady = function(event) {
        player = event.target;
        player.addEventListener('onStateChange', function (e) { onPlayerStateChange(e); });
        //setup skin
        if (!ntv.Util.isIE()) {
            scope.setupSkin();
        }
        scope.bindOnProgress();
        scope.triggerEvent("ntvPlayerReady");
        if (scope.playerVarsAutoPlay){
            scope.play();
        }
    };

    // create the YT player
    var setupPlayer = function(element){
        if (player !== undefined){
            return;
        }
        element.style.visibility = "hidden";
        player = new YT.Player(element, {
            height: '390',
            width: '640',
            events: { 'onReady': function (e) { onPlayerReady(e); element.style.visibility = "visible";} }
        });
        q(element.ownerDocument).mouseenter(function () {
            scope.triggerEvent("ntvUserActive");
        }).mouseleave(function () {
            scope.triggerEvent("ntvUserInactive");
        }).mousemove(function (e) {
            if (!e.target.tagName && !e.relatedTarget) {
                scope.triggerEvent("ntvUserInactive");
            }
        });

        //setup skin
        if (ntv.Util.isIE()) {
            scope.setupSkin();
        }
    };

    // wait until the YT library is fully loaded
    var onYouTubeIframeAPIReady = function () {
        if (typeof YT != "undefined") {
            YT.ready(function () {
               setupPlayer(q(scope.iframeContent).find("#ntvVideo")[0]);
            });
        } else {
            setTimeout(function () { onYouTubeIframeAPIReady(); }, 100);
        }
    };

    // =======================================================================================
    //                         Public functions
    // =======================================================================================

    // this function will be called after the parent init function is executed
    this.postInitHook = function() {
        ntv.Util.appendScript('https://www.youtube.com/player_api', function () { onYouTubeIframeAPIReady();  }, "ntv-yt-api");
    };

    this.postVideoRenderingHook = function(){
        var param = this.renderingParams;
        // For YT we want to count the click on the YT site, the user need to initialize the action
        if (!param.autoplay || param.mobile) {
            q(scope.iframeContent).find(".video-preview-img").css("visibility", "hidden");
        }
    };

    this.play = function(){
        this.onPlayIntent();
        player.playVideo();
    };

    this.pause = function(){
        player.pauseVideo();
    };

    this.reset = function(){
        player.seekTo(0);
        player.pauseVideo();
    };

    //override the parent implementation
    this.toggle = function() {
        var param = this.renderingParams;
        if (!param.mobile && param.autoplay) { // for YT toggle only should work for desktop when autoplay
            this.playing ? this.pause() : this.play();
            this.onUserInteracted();
        }
    };

    this.isSeeking = function() {
        return state != 2; // for YT the pause state is not tied to seeking, so we always return false
    };

    this.isFullScreen = function(){
        return false; // we don't need this for YT
    };

    this.setUserActive = function(active){
        active ? scope.triggerEvent("ntvUserActive") : scope.triggerEvent("ntvUserInactive");
    };

    this.getCurrentTime = function() {
        return player.getCurrentTime() || NaN;
    };

    this.getDuration = function() {
        return player.getDuration() || NaN;
    };

    this.mute = function(){
        player.mute();
    };

    this.unMute = function(){
        player.unMute();
    };

    this.setVolume = function(volume){
        player.setVolume(volume * 100);
    };

    this.getVolume = function(){
        return player.getVolume ? player.getVolume() / 100 : 100;
    };

    this.bindAutoPlayerUserInteraction = function(func){
        this.doc.bind('ntvUserInteracted', func);
    };

    this.unbindAutoPlayerUserInteraction = function() {
        this.doc.unbind('ntvUserInteracted');
    };

    // init the player
    ntv.Util.runWithFirefoxIframeProtection(this.iframe, function() { scope.init() }, function() {scope.validateIframe() });

};
ntvExtends(ntv.Video,ntv.YouTubeVideo);// Requires video.js
// Requires nativo-video.js
// Requires youtube-video.js

ntv.VideoRendering = function(params) {
    ntv.Util.copyProperties(params, this);

    var consts = {
        // VIDEO EXECUTION TYPES
        CLICK_TO_EXPAND: 4,
        PRE_EXPANDED: 8
    };

    var q = prdom.query;
    var scope = this;
    var doc = q(PostRelease.getTopWindow().document);

    var outerElement = doc.find("." + scope.outerCssClass);
    var linkElem = outerElement.find("." + scope.linkCssClass);
    var previewImage = ntv.Util.applyImageResizer(scope.previewImage);
    var adID = scope.player.adID;
    var placementID = scope.player.placementID;
    var iframe = scope.player.iframe;
    var iframeDoc = scope.player.iframeContent[0];
    var iframeWindow = iframeDoc.defaultView || iframeDoc.parentWindow;
    var iframeBodyElement = scope.player.iframeBodyElement;

    var initialWidth = 0;
    var initialHeight = 0;

    var displayTxt = "display";
    var inlineTxt = "inline";
    var noneText = "none";

    // =======================================================================================
    //                         Helper functions
    // =======================================================================================

    // This function will update the top info bar, changing its opacity.
    var updateInfoBar = function (animate, opacity) {
        var infoBar = iframeBodyElement.find(".info-bar");
        if (opacity == 1 && (scope.videoPlaying == undefined || !scope.player.trackingEnabled)){ // don't show if the video never played
            return;
        }
        if (!ntv.Util.isIE() && animate)
            infoBar.animate({opacity: opacity}, 400, function () { iframeBodyElement.find(".info-bar").css(displayTxt, opacity == 1 ? inlineTxt : noneText) });
        else {
            infoBar.css("opacity", opacity).css(displayTxt, opacity == 1 ? inlineTxt : noneText);
        }
    };

    // play video wrapper
    var playVideo = function () {
        hideAllOverlays();
        if (scope.videoPlaying !== undefined) {
            if (iframeBodyElement.find(".replayIcon").length > 0){
                scope.player.reset();    // if the video ended, reset before playing again
            }
            scope.player.play();
            scope.videoPlaying = true;
        }
        scope.player.setUserActive(true);
    };

    // alias to check if the player is full screen, with a protection in case the player is not ready
    var isFullScreen = function () {
        return scope.player && scope.player.isFullScreen();
    };

    // update the element width and height
    var updateDimension = function(elem, w, h){
        return elem.attr('height', h).attr('width', w).css('height', h).css('width', w)
    };

    // show a specific overlay (i.e pause screen, info screen, share screen)
    var showOverlay = function (selector) {
        if (scope.player.canShowRenderingOverlays()) {
            updateInfoBar(false, 0);
            scope.player.setUserActive(false);
            iframeBodyElement.find(selector).css(displayTxt, inlineTxt);
            scope.hidePauseScreen = true;
            if (scope.videoPlaying !== undefined) {
                scope.player.pause();
            }
        }
    };

    // hide a spefic overlay
    var hideOverlay = function (selector) {
        iframeBodyElement.find(selector).css(displayTxt, noneText);
        scope.hidePauseScreen = false;
    };

    // hide all overlays
    var hideAllOverlays = function () {
        hideOverlay('.pause-end-screen');
        hideOverlay('.info-overlay');
        hideOverlay('.share-overlay');
        // only remove the preview image if not using mobile share and the video is playing
        if (scope.videoPlaying !== undefined && !scope.player.addedMobileShare) {
            iframeBodyElement.find(".video-preview-img").css(displayTxt, noneText);
        }
    };

    // Resize the player, keeping the initial aspect ratio
    // if updateImage, we use the image resizer to resize the preview image
    var resize = function (updateImage) {
        try {
            var ntvVideoElem = iframeBodyElement.find("#ntvVideo");
            var w = ntvVideoElem.width();
            if (w > 0) {
                var containerW = outerElement.find(".ntv-video-wrapper" + adID).filter(".ntv-video-wrapper" + adID).width(); // removed andSelf() before .filter() - AC (4/19/2016)
                if (containerW > 0) {
                    w = containerW;
                }
                if (isFullScreen() || (iframeWindow.innerWidth < w)) {
                    w = iframeWindow.innerWidth;
                }
                var h = Math.ceil(initialHeight * w / initialWidth);
                if (isNaN(h)){
                    return;
                }
                updateDimension(iframe, '100%', h).css("margin", 0);
                h = iframe.height();
                updateDimension(ntvVideoElem, w, h);
                updateDimension(iframeBodyElement.find("video"), w, h);
                if (scope.overrideInfoIcon) {
                    var logoWidth = w > 480 ? 100 : 50;
                    iframeBodyElement.find("#aut-info-btn").attr('src', scope.advertiserLogoUrl + '?mode=max&width=' + logoWidth + '&height=30')
                }
                var previewImageElem = iframeBodyElement.find("div[class~='video-preview-img'], .video-preview-img");
                if (updateImage == true && previewImageElem.css("visibility") != "hidden") {
                    var previewImageUrl = previewImage + "?mode=" + scope.resizeMode + "&width=" + w + "&height=" + h;
                    var display = previewImageElem.css(displayTxt);
                    
                    // cssText doesn't work in Safari - AC 5/4/2016
                    previewImageElem.css("background", "url(" + ntvApplyProtocolToUrl(previewImageUrl) + ") no-repeat !important").css("background-size", "cover !important").css("display", display);
                }
            }
        } catch (e) {
            console.log(e)
        }
    };

    this.resizeIframe = function(){
        resize();
    }

    // if the player goes full screen we need to hide the share button
    var onFullScreenChange = function () {
        var display = isFullScreen() ? noneText : inlineTxt;
        iframeBodyElement.find(".share-btn-bottom").map(function () {
            if (!q(this).hasClass('top-share-btn')) {
                q(this).css(displayTxt, display);
            }
        });
        iframeBodyElement.find('.control-spliter').map(function () {
            if (q(this).css('float') == 'right') {
                q(this).css(displayTxt, display);
            }
        });
        setTimeout(resize, 200);
    };

    // =======================================================================================
    //                         Main functions
    // =======================================================================================

    var setInitialDimensions = function(){
        iframe.css("position", "relative"); // force the iframe position to be relative

        // get the initial dimensions
        initialWidth = iframe.attr('width');
        initialHeight = iframe.attr('height');

        if (initialWidth == 0 && initialHeight == 0) {
            // default aspect ratio
            initialWidth = 16;
            initialHeight = 9;
        }

        iframe.attr('width', '100%');
    };

    var setupSharingSkin = function () {

        // add our css to the iframe head
        ntvAppendStylesheet("ntvSharingCss", scope.cssUrl, iframeDoc);

        // add the sharing html to the iframe body
        iframeBodyElement.find(".video-wrapper").append(scope.html);

        //dynamically add the learn more table rows
        var learnMoreTR = iframeBodyElement.find('.pause-end-screen table tr')[1];
        iframeBodyElement.find('.share-overlay table tr:last').after(learnMoreTR.outerHTML);
        iframeBodyElement.find('.info-overlay table tr:last').after(learnMoreTR.outerHTML);


        // if CLICK_TO_EXPAND, hide preview image
        if (scope.videoExecution == consts.CLICK_TO_EXPAND && !scope.article) {
            iframeBodyElement.find(".video-preview-img").css("visibility", "hidden");
        }

        // set the initial play icon
        iframeBodyElement.find('a[class ~="replayIcon"]').removeClass("replayIcon").addClass("playIcon");

        var replayLabel = iframeBodyElement.find('a[class ~="replayLabel"]');
        var ntvVideo = iframeBodyElement.find("#ntvVideo");
        var height = ntvVideo.attr('height');

       window.iframeNativo = iframeBodyElement

        setInitialDimensions();

        //setup custom CTA image
        if (scope.customLearnMoreImg != ''){
            iframeBodyElement.find('a[class ~="ntvLearnMoreIcon"]').attr('style', 'background: rgba(255, 255, 255, 0) url('+ scope.customLearnMoreImg +') 0px 50%/contain no-repeat !important;');
        }

        // events binding
        q(window).bind('ready load resize orientationchange', resize);
        q(iframeWindow).bind('ready load resize orientationchange', resize);

        // info overlay
        var infoButtonSelector ='.info-btn a';
        if (scope.overrideInfoIcon) {
            var infoBtnDiv = iframeBodyElement.find('.info-btn');
            infoBtnDiv.find('a').remove();
            infoBtnDiv.removeClass('info-btn');
            infoBtnDiv.addClass('img-info-btn');
            // logic to define the advertiser logo max width
            var w = ntvVideo.width();
            w = w > 480 ? 100 : 50;
            infoBtnDiv.prepend('<img id="aut-info-btn" src="' + scope.advertiserLogoUrl + '?mode=max&width=' + w + '&height=30">');
            infoButtonSelector = '.img-info-btn';
        }
        iframeBodyElement.find(infoButtonSelector).click(function () {
            showOverlay('.info-overlay');
            return false;
        });

        // show share overlay
        iframeBodyElement.find('.share-btn-bottom').click(function () {
            showOverlay('.share-overlay');
            return false;
        });

        // on play or close overlay buttons, we should play the video
        iframeBodyElement.find("a[class ~='play'], div.share-close-btn a, div.info-close-btn a").click(function () {
            playVideo();
            return false;
        });

        iframeBodyElement.find("div[class ~='video-preview-img']").click(function () {
            scope.videoPlaying = true;
            playVideo();
            return false;
        });
         iframeBodyElement.find("div[class ~='video-preview-img'], div[class ~='video-preview-img'] a").click(function () {
            scope.videoPlaying = true;
            playVideo();
            return false;
        });
        // on the play event we should hide all overlays
        q(doc).bind("ntvPlayerPlay", function (e, id) {
            if (id == adID && !isFullScreen()) {
                scope.videoPlaying = true;
                hideAllOverlays();
                if (!scope.player.playedOnce) {
                    scope.player.playedOnce = true;
                    outerElement.find("div[class ~='ntv-mobile-share-bar']").css(displayTxt, inlineTxt);
                }
            }
        });

        // on pause we should show the pause overlay
        q(doc).bind("ntvPlayerPause", function (e, id) {
            if (id == adID && scope.videoPlaying && !scope.player.isSeeking() && !scope.hidePauseScreen && !isFullScreen()) {
                scope.videoPlaying = false;
                replayLabel.text("Resume Video");
                iframeBodyElement.find(" a[class ~='replayIcon']").removeClass("replayIcon").addClass("playIcon");
                setTimeout(function () {
                    showOverlay('div[class ~="pause-end-screen"]')
                }, 200);
            }
        });

        // when the video was completed, we should show the replay overlay
        q(doc).bind('ntvVideoComplete', function (e, id) {
            if (id == adID && !isFullScreen()) {
                scope.videoPlaying = false;
                replayLabel.text("Replay Video");
                iframeBodyElement.find("a[class ~='playIcon']").removeClass("playIcon").addClass("replayIcon");
                showOverlay('.pause-end-screen');
            }
        });

        q(doc).bind('ntvUserActive', function (e, id) { // on user active we should show the info bar
            if (id == adID && scope.videoPlaying) {
                updateInfoBar(true, 1)
            }
        }).bind('ntvUserInactive', function (e, id) { // on user inactive we should hide the info bar
            if (id == adID) {
                updateInfoBar(true, 0)
            }
        }).bind('ntvFullScreenChange', function (e, id) { // bind the full screen change event
            if (id == adID) {
                onFullScreenChange()
            }
        });

        // apply hook to track head and click
        outerElement.find('.prx_viewable_title' + placementID).click(function () {
            scope.player.headlineClicked();
        });

        resize(true);
        setTimeout(resize, 1000); // just in case the dom wasn't ready by the time this was instantiated

        updateInfoBar(false, 0); // hide the info back when the player is created
    };


    var renderPreExpanded = function () {
        // setup and clean the template
        outerElement.find('#ntvVideoDiv' + adID).remove();
        iframe.parent().removeAttr('style');

        //add specific event hooks for this video execution
        linkElem.map( function() {
            var elem = q(this);
            if (ntv.Util.isNotValidHeadlineLink(elem)){
                elem.click( function() {
                    scope.player.toggle();
                    return false;
                });
                elem.removeAttr("href").css('cursor', 'pointer');
            }
        });

        if (scope.player.clickedBeforeRendering){
            scope.player.toggle();
        }
    };

    var clickToExpandLinkClick = function(ntvExpanded){
        if (!outerElement.hasClass(ntvExpanded)) {
            outerElement.addClass(ntvExpanded);
            if (scope.autoplay) {
                setTimeout(function () {
                    if (outerElement.hasClass(ntvExpanded)) {
                        scope.player.play();
                    }
                }, 1000);
            }
        } else {
            outerElement.removeClass(ntvExpanded);
            scope.player.pause();
        }
    };

    var renderClickToExpand = function () {
        // setup and clean the template
        outerElement.addClass('ntvExpandable');
        outerElement.find(".ntv-video-frame").css('transition-duration', scope.expandSpeed).css('-webkit-transition-duration', 'width ' + scope.expandSpeed);
        // fix for expandable ad units so the video wrapper can inherit the correct height and padding
        var videoWrapperParent = outerElement.find(".ntv-video-wrapper" + adID).parent();
        if (videoWrapperParent.attr('class') == 'ntv-video-container') {
            videoWrapperParent.css('height', 'inherit');
            videoWrapperParent.css('padding-bottom', 'inherit');
        }
        iframe.parent().removeAttr('style');

        //add specific event hooks for this video execution
        linkElem.map( function() {
            var elem = q(this);
            if (ntv.Util.isNotValidHeadlineLink(elem)) {
                elem.click(function() {
                    clickToExpandLinkClick("ntvExpanded");
                    return false;
                });
            }
        });

        if (scope.player.clickedBeforeRendering){
            clickToExpandLinkClick("ntvExpanded");
        }

    };

    var init = function () {
        switch (scope.videoExecution) {
            case consts.PRE_EXPANDED:
                renderPreExpanded();
                break;
            case consts.CLICK_TO_EXPAND:
                renderClickToExpand();
                break;
        }
        if (scope.videoExecution) {
            setupSharingSkin();
        } else {
            // get the initial dimensions
            setInitialDimensions();            // events binding
            q(window).bind('resize', resize);
            q(iframeWindow).bind('resize', resize);
            resize();
        }
        q(document).trigger("ntvVideoRenderingReady", [placementID + "_" + adID, iframeBodyElement]);
    };

    init();
};


/**
 * Created by marcelo on 16/10/15.
 * This class is responsible for the video auto play functions. it will track and be able to detect when the video
 * is in view and apply to the auto play constraints to start playing, as well as execute the expected action when
 * the video gets out of screen, finish player or when the user interacts for the first time.
 */
ntv.VideoAutoPlayTracker = function(params){
    ntv.Util.copyProperties(params, this);
    var scope = this;
    var consts = {
        PAUSE: 1,
        RESTART: 2,

        SHOW_END_SCREEN: 1,
        REPLAY: 2,
    };
    var videoPlaying = false;
    var playedOnce = false;
    var q = prdom.query;
    var pr = PostRelease;
    var player = scope.player;


    var notShowEndScreenOrShowEndScreenAndDidntPlayOnce = function(){
        return scope.onVideoEnd != consts.SHOW_END_SCREEN ||
            (scope.onVideoEnd == consts.SHOW_END_SCREEN && !playedOnce);
    }

    // what to do when the video is consider out of screen
    var onPlayerOutOfScreen = function(){
        if (scope.onOutOfScreen == consts.PAUSE){
            player.pause();
        } else if (notShowEndScreenOrShowEndScreenAndDidntPlayOnce()) {
            player.reset();
        }
        videoPlaying = false;
    }

    var stopWatch = new ntvStopWatch(function () {
            if (notShowEndScreenOrShowEndScreenAndDidntPlayOnce()) {
                player.play();
                videoPlaying = true;
            }
        }, scope.minViewableAreaTime);

    // detect if the video is in or out of screen
    var checkIsVisible = function () {
        if (!ntv.Util.canExecute(checkIsVisible, "videoViewable", 100)) {
            return;
        }
        //check if video element is visible on screen
        var viewability = ntv.Util.getElementViewability(scope.playerElement);
        var viewable = (viewability.visibleArea / viewability.totalArea) >= scope.minViewableArea;
        if (viewable && prdom.onFocus) {
            stopWatch.resume()
        } else {
            stopWatch.reset();
        }
        var outOfScreen = (viewability.visibleArea / viewability.totalArea) <= scope.outOfScreenViewableArea;
        if (outOfScreen || !prdom.onFocus){
            stopWatch.eventFired = false; // so we can fire multiple times
            if (videoPlaying){
                onPlayerOutOfScreen();
            }
        }
    }

    // function in charge to turn off auto play, when should be done when the user interacts
    var turnOffAutoPlay = function(){
        q(pr.getTopWindow()).unbind('scroll DOMNodeInserted ready load ntvOnFocusChange');
        player.unbindAutoPlayerUserInteraction();
        player.setVolume(scope.onClickVolume);
        player.unMute();
        player.turnOffAutoPlay();
        if (scope.onClickAction == consts.RESTART){
            player.reset();
        }
        player.play();
    }

    var init = function(){
        player.mute();
        player.userInteracted = false; // reset
        q(pr.getTopWindow()).bind('scroll DOMNodeInserted ready load ntvOnFocusChange', checkIsVisible);

        player.iframeBodyElement.find(".video-preview-img").css("visibility", "hidden");

        // set infinite loop until the user interacts if onViewEnd is set to replay
        player.doc.bind('ntvVideoComplete', function (e, adID) {
            if (adID == player.adID){
                if (scope.onVideoEnd == consts.REPLAY){
                    if (!player.userInteracted){
                        player.reset();
                        player.play();
                    }
                } else {
                    playedOnce = true;
                }
            }
        });
        player.bindAutoPlayerUserInteraction(turnOffAutoPlay);

        setTimeout(checkIsVisible, 100);
    }

    init();
}
ntv.VideoMobileShare = function(params) {
    ntv.Util.copyProperties(params, this);
    var q = prdom.query;
    var metaViewportContent = "";
    var scope = this;
    var player = scope.player;
    var position = 0;
    function preventBackgroundScrolling(event) {
        (window.orientation == 90 || window.orientation == -90) ?  document.body.scrollTop = position : event.preventDefault();
    }
    function touchMoveEvent(action) {
        q(ntv_iframe.contentWindow.document.body)[action]("touchmove", preventBackgroundScrolling);
    }
    
    var ntv_iframe = player.doc.find("#ntvShareIframe" + player.adID)[0];
    window.parent.document.body.appendChild(ntv_iframe);
    var mobileShareIframeDoc = ntv.Util.writeIframe( prdom.query(ntv_iframe), '', this.headHtml , this.bodyHtml);

    var closeModalSharePopup = function () {
        touchMoveEvent("unbind");
        q(ntv_iframe).css("display" , "none");
        // remove 1:1 ratio to viewport - AC (3/10/16)
        q("body").css("overflow", "inherit"); // Restoring Scrolling in background
        q('head').find("meta[name=viewport]").attr("content", metaViewportContent);
        document.querySelector("#ntvVideoIframe" + player.adID).scrollIntoView(true);
        document.body.scrollTop -= (window.screen.availHeight / 2);
    };

    this.openModalSharePopup = function () {
        position = document.body.scrollTop;
        touchMoveEvent("bind");
        // add 1:1 ratio to viewport  - AC (3/10/16)
        q('head').find("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0");
        q('body').css("overflow","hidden"); // Preventing Scrolling in background
        //Use orientation to determine styling of window.top.document.body so if page is zoomed, the modal 100% of the screen and fixed. Added to help with page zooming.. - AC (3/10/16)
        q(ntv_iframe).css("display", "block");
    };

    var init = function() {
        //Added meta tag to ensure that we have control over viewport as the non-responsive sites will not display modal properly  - AC (3/10/16)
        var metaViewport = q('head').find('meta[name=viewport]');
        if (metaViewport.size() == 0) {
            q('head').append(q('<meta name="viewport" id="ntvviewport" content="">')); //Add Node Once, manipulate later - AC (3/10/16)
        } else {
            metaViewportContent = q(metaViewport[0]).attr('content');
        }

        q(mobileShareIframeDoc).find("a#ntv_cancel").click(closeModalSharePopup);
        q(mobileShareIframeDoc).find("#ntv-share-background").click(closeModalSharePopup)

        var mobileShareIframeBody = q(mobileShareIframeDoc).find("body");
        q(player.doc).trigger("ntvMobileShareReady", [player.placementID + "_" + player.adID, mobileShareIframeBody]);
        mobileShareIframeBody.find("#ntv_video, .ntv_video-title, .fa-play").click(function() {
            player.play();
            closeModalSharePopup();
        });
    }

    init();

}/**
 * Created by marcelo on 24/09/15.
 */

ntv.Gallery = function(params){
    ntv.Util.copyProperties(params,this);

    var scope = this;
    var q = prdom.query;
    var consts = PostRelease.consts;
    var protocol = window.location.protocol;

    this.galleryJS = ntv.Util.adBlockerValidation(protocol + '//s.ntv.io/js/gallery.min.js');
    this.galleyCss = ntv.Util.adBlockerValidation(protocol + '//s.ntv.io/css/gallery.css');

    var legacyGalleryCss = ntv.Util.adBlockerValidation(protocol + '//s.ntv.io/css/gallery-footer.css');
    var sliderSelector = '.slider';

    var GALLERY_SLIDE_VIEW_ACTION_TYPE = 54;

    var gallery; // the gallery slick object
    var metadataElement; // the jquery element that holds the classes that will be filled in real time.

    var iframeSelector = "iframe#ntv-slideshow";
    // find the correct iframe element
    var container = document.body;
    if (q(this.outerCssClass).size() > 0) {
        container = q(this.outerCssClass);
    }
    var iframe = q(container).find(iframeSelector);
    var iframeContent; // the slideshow content jquery element


    /*
     * Generates the tracking url, the redirect Url parameter is optional
     */
    var getTrackingUrl = function(actionType, redirectUrl){
        var result = scope.baseTrackingUrl + actionType + '&' + consts.AVP + "=" + scope.adVersionPlacement + "&ord=" + new Date().getTime();
        if (redirectUrl)
            result += "&" + consts.REDIRECT+ '=' + redirectUrl;
        return result;
    };

    /*
     * This function will create the slider elements that will be rendered as the slideshow inside an iframe
     */
    var buildImageSliderContent = function(){
        var result = "";
        for (var i = 0; i < scope.slideshow.slides.length; i++) {
            slide = scope.slideshow.slides[i];
            if (slide.enabled) {
                result += '<div><div class="ntv-image" style="background-image: url(\'' + location.protocol + slide.image  + '\');'+
                    (slide.clickUrl ? 'cursor: pointer;' : '') + '" ';
                if (slide.clickUrl){
                    var extraParam = ntv.Util.isiOS() ? ',\'location=no\'' : '';
                    result += 'onclick="window.open(\''+ getTrackingUrl(4,slide.clickUrl) +'\',\'_blank\''+ extraParam+ ');"';
                }
                result += '></div></div>';
            }
        }
        return '<div class="slider">' + result + '</div>';
    };

    /*
     * This function will create the legacy footer in case the article template doesn't have the SLIDEMETADATA
     * fragment or the article is not Gallery ad unit, but has a slideshow as part of the content.
     */
    var getLegacyFooter = function(){
        var result = '<table style="width: 100%"><tbody><tr>';
        result += '<td class="ntv-gallery-headline"></td>';
        result += '<td style="text-align: right" class="ntv-gallery-slidenum">';
        result += '<span class="ntv-gallery-current-slide"></span> / <span class="ntv-gallery-total-slides"></span></td></tr></tbody></table>';
        result += '<p class="ntv-gallery-description"></p>';
        result += '<table class="ntv-gallery-detailinfo"><tbody><tr>';
        result += '<td class="ntv-gallery-date"></td>';
        result += '<td style="text-align: right" class="ntv-gallery-photo-credit"></td>';
        result += '</tr></tbody></table>';

        return result;
    };

    /*
     *  Find element including self
     */
    var find = function(element, selector ){
        return element.find(selector).andSelf().filter(selector);
    };

    /*
     * Function that should be triggered once the slide was changed. It should update the metadata element,
     * fire tracking, and update companion assets if needed
     */
    var onSlideChange = function(forceRefreshCompanion) {
        var curSlide = gallery.slick('slickCurrentSlide');
        var slide = scope.slideshow.slides[curSlide];

        // update the meta data element
        if (scope.showHeadline) {
            find(metadataElement, '.ntv-gallery-headline').html(slide.headline);
        }
        find(metadataElement, '.ntv-gallery-current-slide').html(curSlide + 1);
        find(metadataElement, '.ntv-gallery-total-slides').html(scope.slideshow.slides.length);
        if (scope.showDesc) {
            find(metadataElement, '.ntv-gallery-description').html(slide.description);
        }
        if (scope.showDate || scope.showCredit) {
            if (scope.showDate) {
                find(metadataElement, '.ntv-gallery-date').html(slide.date);
            }
            if (scope.showCredit) {
                find(metadataElement, '.ntv-gallery-photo-credit').html(slide.photoCredit);
            }
        } else {
            find(metadataElement, 'ntv-gallery-detailinfo').css('display', 'none');
        }

        // fire tracking
        //noinspection JSUnresolvedVariable
        ntvInsertTracking(getTrackingUrl(GALLERY_SLIDE_VIEW_ACTION_TYPE), scope.thirdPartyTracking, 1);

        // refresh the companion assets if needed
        if (forceRefreshCompanion && scope.refreshCompanionAssets) {
            var adResponse = PostRelease.articles[scope.adID];
            q('.ntv-companion').remove(); // delete the old companions
            if (adResponse.Fragments) {
                for (var i = 0; i < adResponse.Fragments.length; i++) {
                    var fragment = adResponse.Fragments[i];
                    // only process companion fragments
                    if ((new RegExp('\\bTOP\\b|\\bRIGHTRAIL\\b|\\bBOTTOMb\\b')).test(fragment.Type)) {
                        if (fragment.Mode == 1) { // if replace, we need to find the injection node again
                            fragment.InjectNode = prdom.query(fragment.Selector).first();
                        }
                        PostRelease.InsertAd(fragment); // add the companions again
                    }
                }
            }
        }
        if (typeof onNativoSlideChange == 'function') {
            try {
                onNativoSlideChange();
            } catch (err) {
                if (window.console && window.console.log) {
                    window.console.log(err.message);
                }
            }
        }
    };

    /*
     * Function to handle the resize event for the iframe
     */
    var resize = function(){
        var height = iframe.height();
        var width = iframe.width();
        iframeContent.find('body').css('height', height).css('width',width);
        iframeContent.find('.slick-track').css('height', height);
    };

    /*
     * Function to handle the on gallery ready event
     */
    var onGalleryReady = function(){
        onSlideChange(false);
        resize();
    };

    var setupIframe = function(){
        // Set properties on iFrame container
        iframe.attr('frameBorder', 0);
        iframe.attr('scrolling', "no");
        iframe.attr('border', "1px solid #000");

        var iframeDoc = iframe.contents()[0] || iframe[0].contentWindow.document;
        iframeDoc.open();

        // set the iframe header content
        var header = '<link rel="stylesheet" type="text/css" href="'+ scope.galleyCss+'"/>';
        if (scope.customCss){
            header += '<style>' + scope.customCss + '</style>';
        }

        // set the iframe body content
        var body = buildImageSliderContent();

        // write the iframe
        iframeDoc.write('<html style="overflow: hidden"><head>'+ header +'</head><body>'+ body +'</body></html>');
        iframeDoc.close();

        iframeContent = q(iframeDoc);
        resize();


        var iframeWindow = iframeDoc.defaultView || iframeDoc.parentWindow;
        // add the gallery js and bind the events
        ntv.Util.appendScript(scope.galleryJS, function () {
            // events must be set before initialize the slick object
            iframeWindow.$(sliderSelector).on('afterChange', function(){
                onSlideChange(true);
            });
            gallery =  iframeWindow.$(sliderSelector).slick({
                speed: 300,
                slidesToShow: 1
            });
            q(iframeWindow).bind('resize', resize);
            onGalleryReady();
        }, "ntv-gallery", iframeDoc);
    };

    /*
     * The init function should  find the metadataElement or wait until it is ready and then setup the iframe
     */
    this.init = function() {
        // check what element we will render
        for (i = 0; i < scope.slideshow.slides.length; i++){
            var slide = scope.slideshow.slides[i];
            if (slide.headline){
                scope.showHeadline = true;
            }
            if (slide.description){
                scope.showDesc = true;
            }
            if (slide.date){
                scope.showDate = true;
            }
            if (slide.photoCredit){
                scope.showCredit = true;
            }
        }


        // locate and set the metadata element
        if (scope.useLegacyFooter) {
            iframe.replaceWith('<div id="ntv-gallery-wrapper">' + iframe.prop('outerHTML') + '<div class="ntv-gallery-footer">' + getLegacyFooter() + '</div></div>');
            iframe = q(container).find(iframeSelector);
            var width = iframe.width();
            q(container).find("#ntv-gallery-wrapper").css("width", width);
            iframe.css("width", "100%");
            metadataElement = q(container).find(".ntv-gallery-footer");
            ntvAppendStylesheet("ntv-gallery", legacyGalleryCss)
        } else {
            metadataElement = q(container).find(".ntv-gallery-metadata");
        }
        if (metadataElement.length > 0){
            setupIframe();
        } else {
            setTimeout(function () { scope.init() }, 100);
        }
    };



    // init the gallery
    ntv.Util.runWithFirefoxIframeProtection(iframe, function() { scope.init() });

};// params.primaryImpressionURL
// params.thirdPartyTrackingTags
// params.minimumAreaViewable
// params.minimumExposedTime
// params.checkMinimumAreaViewable
// params.placementID
// params.infiniteScroll
// params.is_initPos
// params.is_interval
function ntvViewableImpressionTracker(params) {
    ntv.Util.copyProperties(params,this);
    var obj = this;
    this.win = prdom.win || window; // we set the scope where to search the unit

    this.stopWatch = new ntvStopWatch(function () {
        ntvInsertTracking(obj.primaryImpressionURL, obj.thirdPartyTrackingTags, 1);
        obj.remove(); // once we track the viewable impression, we can remove the tracker
    }, this.minimumExposedTime);

    this.lastCheck = new Date();
    this.missedCheck = 0;

    if (this.checkOnFocus) {
        prdom.onFocusEvents.push(function () {
            if (!prdom.onFocus) {
                obj.stopWatch.reset();
            }
        });
    }

    // infinity scroll logic
    if (this.infiniteScroll && this.is_interval > 0 && this.selector.indexOf("%p%") > 0) {
        PostRelease.setInfiniteScrollManager(this.placementID, this.is_initPos, this.is_interval, this.selector);
        this.selector = PostRelease.ISManager[this.placementID].getSelector();
    }

    PostRelease.viewableImpressionTrackers.push(obj);
    obj.init();
}

ntvViewableImpressionTracker.prototype.init = function () {
    prdom.query(PostRelease.getTopWindow()).bind('scroll DOMNodeInserted ready load ampScroll', PostRelease.checkIsAdVisible);
    setTimeout(PostRelease.checkIsAdVisible, 100);
}

ntvViewableImpressionTracker.prototype.remove = function () {
    ntv.Util.removeElementFromArray(PostRelease.viewableImpressionTrackers, this); // remove this tracker
    if (PostRelease.viewableImpressionTrackers.length == 0) {
        // if there is no tracker left, unbind the events for viewable impression
        prdom.query(PostRelease.getTopWindow()).unbind('scroll DOMNodeInserted ready load', PostRelease.checkIsAdVisible);
    }
}


ntvViewableImpressionTracker.prototype.checkViewability = function () {
    // raw parameters
    var totalArea = 0;
    var visibleArea = 0;
    var visible = true;

    // final IAB viewability result
    var adViewable = false;

    if (!PostRelease.ampMode) {
        var elements = prdom.query(this.selector, this.win.document);
        if (elements.length > 0) {
            // in case of inventory tracking we only check for 1 element
            if (this.isInvTracking)
                elements = [elements[0]];

            var validElements = [];
            for (var i = 0; i < elements.length; i++) {
                // if we cannot get the area on the higher level, we go down one level
                if (elements[i].offsetWidth == 0 || elements[i].offsetHeight == 0) {
                    prdom.query(elements[i]).children().each(function () {
                        validElements.push(this)
                    });
                } else {
                    validElements.push(elements[i]);
                }
            }
            if (validElements.length == 0) {
                validElements.push(elements[0]); // worst case we check at least if the element is on the viewport
            }
            for (var i = 0; i < validElements.length; i++) {
                var obj = ntv.Util.getElementViewability(validElements[i]);
                totalArea += obj.totalArea;
                visibleArea += obj.visibleArea;
                visible &= obj.visible;
            }
            adViewable = ((visibleArea / totalArea) >= this.minimumAreaViewable) || (!this.checkMinimumAreaViewable && totalArea == 0 && visible);
        }
    } else if (PostRelease.checkAmpViewability) {
        adViewable = PostRelease.checkAmpViewability() >= this.minimumAreaViewable ;
    }

    var focusValidation = this.checkOnFocus ? prdom.onFocus : true;
    if (adViewable && focusValidation) {
        this.stopWatch.resume();
    } else {
        this.stopWatch.reset();
    }
}/**
 * Created by marcelo on 01/04/16.
 */
ntv.CompanionAsset = function(){

    var q = prdom.query;

    function resizeIframe(obj) {
        var iframe = q(obj.contentWindow.document.body);
        if (iframe.length == 0) {
            return;
        }
        obj.style.height = iframe[0].scrollHeight + 'px';
        obj.style.width = iframe[0].scrollWidth + 'px';
    }

    q(document).ready(function() {
        q.each(q('.ntv-adunit'), function(idx, obj) {
            if (obj.rendered === undefined) {
                var userScript = unescape(obj.getAttribute("data-ntv-script"));
                ntv.Util.writeIframe( q(obj), '', '', userScript);
                obj.rendered = true;
            }
            resizeIframe(obj);
            var obj = this;
            obj.addEventListener("load", function(){ resizeIframe(obj) });
        });
    });
    /* REVERT TO THIS IF ABOVE DOESNT WORK WITH ZEPTO

        q(document).ready(function() {
        q.each(q('.ntv-adunit'), function(idx, obj) {
            var userScript = unescape(obj.getAttribute("data-ntv-script"));
            var iframe = q(obj).contents()[0].open();
            if (obj.rendered === undefined) {
                iframe.write(userScript);
                iframe.rendered = true;
            }
            iframe.close();
            resizeIframe(obj);
            var obj = this;
            obj.addEventListener("load", function(){ resizeIframe(obj) });
        });
    });
*/

}
var prxAds = [];

var prxContainerElement;


// we create only 1 instance of PostRelease
if (!window.PostRelease) {
    var PostRelease = new _pr();

    ntvInitOnFocusTracking(); // initialise the on focus logic
    
    // make sure we expose the PostRelease also on the top most window
    if (!PostRelease.getTopWindow().PostRelease) 
        PostRelease.getTopWindow().PostRelease = PostRelease;

    if (!PostRelease.getTopWindow().prdom) PostRelease.getTopWindow().prdom = prdom;

    // why do we have try & catch here?
    var autoStart = true;
    try {
        if (window._prx) {
            for (var i = 0; i < _prx.length; i++) {
                if (_prx[i][0] === 'cfg.SetNoAutoStart') {
                    autoStart = false;
                } 
            }
        }
    }
    catch (err) { }
    if (autoStart) {
        PostRelease.Start();
    }
    
}