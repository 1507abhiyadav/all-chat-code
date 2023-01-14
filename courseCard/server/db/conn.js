const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/course",{
}).then(()=>{
    console.log('connection Successfull')
}).catch((e)=>{
    // console.log(e)
    console.log("no connection")
})