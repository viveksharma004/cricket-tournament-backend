const express=require("express");
const router=express.Router();

//import controller
const { createUser,login } = require("../controllers/createUser");

//define api routes
router.post("/createUser",createUser);
router.post("/login",login)


module.exports=router;