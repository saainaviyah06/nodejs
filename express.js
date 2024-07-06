var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send("Welcome to express middleware");
});
app.get('/help',function(req,res){
    res.send('how can i help u?');
});
var server=app.listen(8000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("example app listening at http://%s:%s",host,port)
})