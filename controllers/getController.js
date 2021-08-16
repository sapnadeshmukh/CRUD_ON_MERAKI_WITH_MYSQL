const connection=require("../database/connection")



// To get all the data from database

module.exports.get_data=(req,res)=> {
    
    var sql = "SELECT * FROM meraki_data";
    var query = connection.query(sql,(err,data)=>{
        if(err) throw err;
        console.log(data)
        res.send(data)
    })
}