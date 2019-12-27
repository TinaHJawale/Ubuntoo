var http=require('http');
serv=http.createServer(function(req,resp){
  resp.write("Hello  Nishikant!");
  resp.write("This is Tina.... Sending you a msg");
  resp.write("Keep it up..... You tried your best!");

  console.log("request is received")
  resp.end("B byyyeee!!!");

});
serv.listen(3000);
console.log("server running at port 3000");
