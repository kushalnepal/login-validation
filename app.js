const fs=require('fs')
const mywritepr =require('./module');

mywritepr("newprom.txt","this is interesting")
.then(function(data){
console.log("sucess >>",data);
})
.catch(function(err){
    console.log("failure >>",err);
})

fs.readFile("./contents/kushal.txt",function(err,done){
    if(err){
        console.log("error in reading >>", err);
    }
    else{
        console.log("sucess in reading >>", done.toString());
    }
})