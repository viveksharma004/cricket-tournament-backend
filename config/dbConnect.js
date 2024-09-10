const mongoose=require("mongoose");
require("dotenv").config();
console.log(process.env.DATABASE_URL);
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
}
).then(()=>{
    console.log("DB Connection established Successfully");
}).catch((error)=>{
    console.log("DB Connection Failed");
    console.error(error.message);
    process.exit(1);
})
}

module.exports=dbConnect;