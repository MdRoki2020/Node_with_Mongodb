const express=require('express');
const app=express();
const mongoose=require('mongoose');
const friendModel=require('./models/friends')

mongoose.connect("mongodb://localhost:27017/MERN_stack?readPreference=primary&appname=MongoDB%20Compass&ssl=false",{useNewUrlParser:true});

app.get('/insert',async(req,res)=>{
    const friends=new friendModel({name:"usha",age:20});
    await friends.save();
    res.send("Insert Data");
});

app.get('/read',async(req,res)=>{
    friendModel.find({}, (err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result)
        }
    });

});


app.listen(3001,()=>{
    console.log("you are connected");
});