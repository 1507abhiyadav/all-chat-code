const express= require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const cors= require("cors")
app.use(cors())
require("./db/conn.js")
const port = process.env.PORT ||5000

const User= require("./models/userDetails");

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })
app.post("/register", async(req,res)=>{
    const[firstname, lastname, username,password ,Confirmpass] =req.body
    try{
        await User.create({
            firstname,
            lastname,
            username,
            password,
            Confirmpass,
        });
        res.send({status:"ok"});
    }
    catch(error){
        res.send({status:"error"});
    }


})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`)
})