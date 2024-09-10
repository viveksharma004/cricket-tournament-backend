//import the model
const User=require("../models/User");

// define the router
exports.createUser=async (req,res)=>{
    try{
        //extract data from body
        const {firstName,
            lastName,
            email,
            country="India",
            terms,
            password,
            confirmPassword,}=req.body; 
            // console.log(req.body);
            // console.log(firstName,lastName,email,country,terms,password,confirmPassword);
        if(!firstName || !lastName || !email || !password ||!confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Could not found details"
            })
        }
        const response=await User.create({firstName,lastName,email,terms,password,confirmPassword,country});
        //send response json format
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created Successfully",
            }
        )
    }catch(error){
        console.error(error);
        // console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:error.message,
            }
        )
    }

}

exports.login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(404).json({
                success:false,
                message:"Email and Password not found",
            })
        }
        const response=await User.findOne({email:email});
        if(!response){
            return res.status(501).json({
                success:false,
                message:"User not found",
            })
        }
        const data=response;
        // console.log(data.password);

        if(password!==data.password){
            return res.status(201).json({
                success:false,
                message:"Password not Matched",
            })
        }
        return res.status(200).json({
            success:true,
            message:"Login Successful",
        })
    }catch(error){
        console.error(error);
        // console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:error.message,
            }
        )
    }
}