const express=require("express");
const router=express.Router();

router.route("/").get((req,res)=>{
    res.status(200).json({massage:"get all contect"});
});
module.exports = router;