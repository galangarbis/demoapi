var http = require('http');

var handleRequests=function(req, res){
   if (req.url==="/") {
       res.write("Hallo gals");
   } 
   else if (req.url==="/Member"){
       res.write("it's Member page");
   }
   else if (req.url==="/Admin"){
       res.write("it's Admin page");
   }
   res.end();
};

var server = http.createServer(handleRequests);

server.listen(3000,function(){
    console.log("Server is running on port 3000");
});