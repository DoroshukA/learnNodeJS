// const MongoClient = require("mongodb").MongoClient;
   
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });
  
// let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}]; 
// mongoClient.connect(function(err, client){
     
//     if(err) return console.log(err);
      
//     const db = client.db("usersdb");
//     const col = db.collection("users");
//     col.insertMany(users, function(err, results){
             
//         col.findOneAndUpdate(
//             {age: 21}, // критерий выборки
//             { $set: {age: 25}}, // параметр обновления
//             function(err, result){
                 
//                 console.log(result);
//                 client.close();
//             }
//         );
//     });
// });

//========================================================

// const MongoClient = require("mongodb").MongoClient;
   
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });
  
// mongoClient.connect(function(err, client){
     
//     if(err) return console.log(err);
      
//     const db = client.db("usersdb");
//     const col = db.collection("users");
//     col.findOneAndUpdate(
//         {name: "Bob"},              // критерий выборки
//         { $set: {name: "Sam"}},     // параметр обновления
//         {                           // доп. опции обновления    
//             returnOriginal: false
//         },
//         function(err, result){
                 
//             console.log(result);
//             client.close();
//         }
//     );
// });

//=============================================================

const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    const col = db.collection("users");
    col.updateMany(
        {name: "Sam"},              // критерий фильтрации
        { $set: {name: "Bob"}},     // параметр обновления
        function(err, result){
                  
            console.log(result);
            client.close();
        }
    );
});