const mongoose = require('mongoose');
//console.log(mongoose.version);

//Defining MongoDB connections URL..
const mongoURL=process.env.MONGODB_URL_LOCAL

//SetUp MongoDB connection
mongoose.connect(mongoURL,{
    // new update mei isski jrruat ni
   // useNewUrlParser: true,
  //  useUnifiedTopology: true
})

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db= mongoose.connection;

//Event listner
db.on('connected',()=>{
    console.log('connected to DB server');
});
db.on('error',()=>{
    console.log('connection error');
});
db.on('disconnected',()=>{
    console.log('connection is now disconnected');
});

//Export the database connection
module.exports=db;