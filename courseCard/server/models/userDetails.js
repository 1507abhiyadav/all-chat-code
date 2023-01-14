const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        firstname: String, 
        lastname: String, 
        username: {type: String,unigue:true}, 
        password: String, 
        Confirmpass: String
    }
);
mongoose.model("User",UserDetailsSchema);