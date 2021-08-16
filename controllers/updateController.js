const connection=require("../database/connection")
const express=require('express')
const app = express()
app.use(express.json())



// To update Data By specific  Id
module.exports.update_data=(req, res) => {

    let sql="UPDATE meraki_data SET name='" +req.body.name+ " ',type='"+req.body.type+" ',logo='"+req.body.logo+" ',short_description='"+req.body.short_description+ "'WHERE id="+ req.params.id;
    let quary = connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("updated successfully!!")
        res.send("updated suceefully!!!")
    })
}