const express=require("express");
const ProfileController= require("../controllers/ProfileController");

const router=express.Router();



router.post("/CreateUserProfile",ProfileController.CreateUserProfile)


module.exports=router;