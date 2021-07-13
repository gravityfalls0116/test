var express=require('express'), http=require('http');

var app=express();

app.use(function(req,res,next){
    console.log('First');
    res.writeHead('200', {'Content-Type': 'text/html; charset=utf8'});
    res.end('<h1>Express server yeahhhhhh</h1>');
});
http.createServer(app).listen(31369,function(){
    console.log('서버 시작');
});