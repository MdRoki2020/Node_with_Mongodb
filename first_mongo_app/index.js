var MongoClient=require('mongodb').MongoClient;

var URL="mongodb://127.0.0.1:27017/";

var config= { useUnifiedTopology: true };

MongoClient.connect(URL,config,function (error,MyMongoClient) {
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");

    // InsertData(MyMongoClient);
    FindAllData(MyMongoClient);
    }
});



function InsertData(MyMongoClient){
    var MyDataBase= MyMongoClient.db("School");
    var MyCollection= MyDataBase.collection('student');
    var MyData={name:"Rakibul",Roll:"96",Class:"Ten",City:"Dhaka"};
    MyCollection.insertOne(MyData,function (error) {
        if(error){
            console.log("Data Insert Fail");
        }
        else{
            console.log("Data Insert Success");
        }
    })
 }

 function FindAllData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("School");
    var MyCollection=MyDataBase.collection("student");
    MyCollection.find().toArray((err,result)=>{
        console.log(result);
    })
 }
 