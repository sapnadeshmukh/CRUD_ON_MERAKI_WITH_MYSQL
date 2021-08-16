const express=require("express")
const router=express.Router()

const getData=require('../controllers/getController')
router.get('/',getData.get_data)
module.exports=router