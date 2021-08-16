const connection=require('../database/connection')
const axios=require('axios')

module.exports.post_data=async(req,res)=>{

        // To fetch data from meraki api

        try {
            const resp = await axios.get('https://saral.navgurukul.org/api/courses');
            let myArr=resp.data.availableCourses;
            
            for (let i in myArr) {
                if (i==10){
                    break;
                }
                
                let ID=(myArr[i].id);
                console.log(ID)
                let NAME=(myArr[i].name);
                let TYPE=(myArr[i].type);
                let LOGO=(myArr[i].logo);
                let SHORT_DESCRIPTION=(myArr[i].short_description)
                var records = [
                    [ID,NAME,TYPE,LOGO,SHORT_DESCRIPTION]


                ];
                // To insert data in Database.
                connection.query("INSERT INTO meraki_data (id,name,type,logo,short_description) VALUES ?", [records], function (err, result) {
                  if (err) throw err;
                  console.log("Data Added!!!");
      
                });
            }
              res.send("DATA ADDED!!")
      
        } catch (err) {
            console.error(err);
        }

            
}

       
        
    

        
    


