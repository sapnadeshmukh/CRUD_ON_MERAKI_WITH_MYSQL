const express=require("express")
const router=express.Router()

const createData=require('../controllers/postController')
router.post('/',createData.post_data)
module.exports=router