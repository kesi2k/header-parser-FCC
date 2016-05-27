var http = require("http");
var port = process.env.PORT



http.createServer(function (request, response){
   
  if (request.url == "/favicon.ico"){} 
   
   var ip_ = request.headers['x-forwarded-for']
   var lang = request.headers["accept-language"].slice(0,5);
   var soft = request.headers["user-agent"];
   var OS = soft.split('(')[1].split(')')[0];
   
   
   console.log("This is the OS: ", soft);
   
   
   var headerPa = {
    ipaddress: ip_,  
    language: lang,  
    software: OS   
   }
   
   response.writeHead(200, {'Content-Type':'application/json'})
   response.end(JSON.stringify(headerPa))
    
    
}).listen(port);