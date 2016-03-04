/**
 * Created by acrawford on 2/26/16.
 */
var restify = require("restify");



var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.fullResponse());
server.opts(/.*/, function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
    res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
    res.send(200);
    return next();
});

server.get(/^\/url\/(.*)/,function(req,res,next){
    var request = require("request");
    var url = decodeURIComponent(req.params[0]);
    var domain = url.match(/http\:\/\/(.*)(\.?)(.+)(\.?)(.*)\.([a-z]{2,9})/)[0];
    console.log(domain);
    request.get(url,function(err,response,body){
        if(!err){
            var protocalAndDomain = 'href="' + domain.replace("http:","") + '/';     
            console.log(protocalAndDomain);       
            body = body.replace(/href=\"\//gi,protocalAndDomain);
            body = body.replace(/src=\"\//gi,protocalAndDomain);
            res.header("Content-Type","text/html");
            res.write(body);
            res.end();
        }
    });
});
server.get(/(.*)/,restify.serveStatic({
    directory: './public',
    default: 'index.html'
}));



//Start Server
var port = process.env.PORT || 8080;
server.listen(port,function(){
    console.log("Server Started. Press Ctrl+c to quit server");
});

///USING RESTful Service (MULTIPLE TEST AT ONCE IN BROWSER STACK) --- WORKS BUT TIMES OUT ON BROWSER STACK. NO CANCELLATION OF TASK WHEN UNIT TEST IS FINISHED
/*
var request = require("request");
var browserEnviornments = [
{"browserstack.local" : true,"name":"IE 10","os_version":"7","browser":"ie","browser_version": "10","os":"Windows","device":null,"url":"http://localhost:8080"}
];

request.get("https://api.browserstack.com/4",function(err,response,body){
    if(!err){
        for(var i = 0; i < browserEnviornments.length; i++){
                    request.post({url:"https://api.browserstack.com/4/worker",
                                    form:browserEnviornments[i]},
                                    function(err,httpResponse,body){
                                        console.log("BODY: ",JSON.parse(body));                                                         
                                        
                                    }).auth("anthonycrawford1","H44s7jnVzhk93oxZ6nAG",false);
        }

    }
}).auth("anthonycrawford1","H44s7jnVzhk93oxZ6nAG",false);
*/



//USING SELENIUM WEBDRIVER (NEXT TASK IN QUE LOADED WHEN PREVIOUS IS FINISHED)

var webdriver = require('selenium-webdriver'),    By = require('selenium-webdriver').By,    until = require('selenium-webdriver').until;

var capabilities = [
    {
        'browserName' : 'firefox',
            'browserstack.user' : 'anthonycrawford1',
            'browserstack.key' : 'H44s7jnVzhk93oxZ6nAG',
            'browserstack.debug' : 'true',
            'browserstack.local' : 'true',
            'project' : 'testingAutomation1z',
            'os' : 'Windows',
            'os_version' : '7',
            'browserstack.debug' : 'true',
            'name':"TEST: FIREFOX"
     },
     {
        'browserName' : 'chrome',
            'browserstack.user' : 'anthonycrawford1',
            'browserstack.key' : 'H44s7jnVzhk93oxZ6nAG',
            'browserstack.debug' : 'true',
            'browserstack.local' : 'true',
            'project' : 'testingAutomation1',
            'os' : 'Windows',
            'os_version' : '7',
            'browserstack.debug' : 'true',
            'name':"TEST: Chrome"
    },
    {
            'browserName' : 'IE',
            'browserstack.user' : 'anthonycrawford1',
            'browserstack.key' : 'H44s7jnVzhk93oxZ6nAG',
            'browserstack.debug' : 'true',
            'browserstack.local' : 'true',
            'project' : 'testingAutomation1',
            'os' : 'Windows',
            'os_version' : '7',
            'browser_version' : '8.0',
            'browserstack.debug' : 'true',
            'name':"TEST: IE 8"
    }
];
for(var i =0; i < capabilities.length;i++){

        setTimeout(function(data){
             var f_driver = new webdriver.Builder().usingServer('http://hub.browserstack.com/wd/hub').withCapabilities(data)
                .forBrowser(data["browserName"])
                .build();
            f_driver.get('http://localhost:8080');
            f_driver.quit();
        }, 0, capabilities[i]);            
}
*
