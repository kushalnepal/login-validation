
const express=require('express')
const app=express()
const apirouter =require('./api.route')
const path = require('path');
const bodyParser = require('body-parser');
//view engine setup
const pug =require('pug')
app.set("view engine",pug)
app.set('views',path.join(__dirname,"views"))

//routing level middleware
app.use('/api',apirouter);

// Use bodyParser middleware for x-www-form-urlencoded data
app.use(bodyParser.urlencoded({ extended: true }));

//Internally memory allocation in express
app.set("port",8000)


//application level middleware Order le fark parxa
app.use(function(req,res,next){
    next({
        msg:"Not found",
        status:400
    })
})

app.use(function(err,req,res,next){
    res.json({
        msg:err.msg||msg,
        status:err.status||500
    })
})

app.listen(app.get("port"),function(err,done){
if(err){
    console.log('server connection failed ');
}else{
console.log("server listing to port"+app.get('port'));
console.log("press CTR + C to exit")

}
})


