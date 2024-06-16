//we can place all the common routes in this common api example:registration , login etc which are common

const exp=require('express')
const commonApp=exp.Router();


commonApp.get('/common',(req,res)=>{
    res.send({message:"This from common api"})
})

//export
module.exports=commonApp;