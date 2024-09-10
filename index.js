const express=require("express");
const app=express();
require("dotenv").config();
const cors=require("cors");
const PORT=process.env.PORT||8000;
// const bodyParser=require("body-parser")
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


//starting server
app.listen(PORT,()=>{
    console.log(`Server is Live at ${PORT}`);
})

const dbConnect=require("./config/dbConnect");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1> This is Homepage</h1>`);
})
const userRoutes=require("./routes/user")
// mount the todo api route with versioning and api
app.use("/api/v1",userRoutes);


// const {createTodo}=require("./controllers/createTodo")
// app.post("/createTodo",createTodo);













// app.get("/getPost",(req,res)=>{
//     const {title,description}=req.body;
//     console.log(title);
//     console.log(description);
//     res.send("mission accomplished");
// })

