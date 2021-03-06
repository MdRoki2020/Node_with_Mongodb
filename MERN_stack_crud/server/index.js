const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const friendModel=require('./models/friends');

app.use(cors());
app.use(express.json()); //middleware

mongoose.connect("mongodb://localhost:27017/MERN_stack?readPreference=primary&appname=MongoDB%20Compass&ssl=false",{useNewUrlParser:true});

app.post('/addFriend',async(req,res)=>{

    const name=req.body.name;
    const age=req.body.age;

    const friends=new friendModel({name:name,age:age});
    await friends.save();
    res.send("Data Insert Successfull");
});

app.get('/read',async(req,res)=>{
    friendModel.find({}, (err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.put('/update',async (req,res)=>{
    const newAge=req.body.newAge;
    const id=req.body.id;

    try{
        await friendModel.findById(id,(err,friendToUpdate)=>{
            friendToUpdate.age=Number(newAge);
            friendToUpdate.save();
        });
    }catch(err){
        console.log(err);
    }
})

app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    await friendModel.findByIdAndRemove(id).exec()
    res.send("Itemdeleted");
})


app.listen(3001,()=>{
    console.log("you are connected");
});