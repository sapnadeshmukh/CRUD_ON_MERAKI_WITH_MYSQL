const connection=require("../database/connection")


// To delete Data By specific  Id

module.exports.delete_data=(req,res) =>{
    var sql = "DELETE FROM meraki_data WHERE id =" +req.params.id;
    var quary = connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("Data has deleted!!")
        res.send("Data has deleted!!")
    });
}