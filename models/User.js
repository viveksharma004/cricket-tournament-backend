const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
            maxLength:50,
        },
        lastName:{
            type: String,
            required:true,
            maxLength:50,
        },
        email:{
            type: String,
            required:true,
           
        },
        country:{
            type: String,
            required:true,
        },
        terms:{
            type: String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
)

module.exports=mongoose.model("User",userSchema);