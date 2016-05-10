var log={};
function logThis(obj){
  (log[obj.name]) ? log[obj.name].push(obj) : ( log[obj.name] = [], log[obj.name].push(obj));
}

// LOGGING TESTING AND DO SOMETHING WITH IT
QUnit.log(logThis);
QUnit.testDone(function(complete){
  (typeof console != "undefined") ? console.log("Complete: ",complete) :"";
});
QUnit.done(function(total){
  (typeof console != "undefined") ? console.log("Total: ",total) :"";
  (typeof console != "undefined")  ? console.log("Log: ",log) :"";
});