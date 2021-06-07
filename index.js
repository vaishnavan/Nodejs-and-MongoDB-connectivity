const express = require("express");
const mongoose = require("mongoose");
const app = express();
// assign a port number
const port = 5000 || process.env.PORT
const URI = "mongodb+srv://basics:Ram$123@cluster0.xqvgz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//to get request show some response to the server
app.get("/", (req, res) => {
    res.send("hello vaishnavan")
})

// to start the server listen to port 5000
app.listen((5000), () => {
    console.log(`server up and running on Port ${port}`)
})

//connect to db
mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true}, (err) =>{
    if(!err){
        console.log("Database Connected Successfull");
    }else{
        console.log("mongoDB ERR: "+err);
    }
})


