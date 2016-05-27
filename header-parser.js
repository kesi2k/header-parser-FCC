var http = require("http");
var port = process.env.PORT



http.createServer(function (request, response){
   
   
   
   var ip_ = request.headers['x-forwarded-for']
   var lang = request.headers["accept-language"].slice(0,5);
   var soft = request.headers["user-agent"];
   
   console.log("This is the OS: ", soft);
   
   
   var headerPa = {
    ipadress: ip_,  
    language: lang,  
    software: soft   
   }
   
   response.writeHead(200, {'Content-Type':'application/json'})
   response.end(JSON.stringify(headerPa))
    
    
}).listen(port);