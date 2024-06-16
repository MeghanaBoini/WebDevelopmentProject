//server.js
const exp=require('express')
const app=exp()
require('dotenv').config() //process.env
//import mongo client
const mongoClient=require('mongodb').MongoClient;
//connecting frontend and backend
//const path=require('path')

//to parse the body of req
app.use(exp.json())

//connect to db
mongoClient.connect(process.env.DB_URL)
.then(client=>{
        //get db obj
        const studentDB=client.db('studentDB')
       //get collection obj
        const studentcollection=studentDB.collection('studentcollection')
        //share collection obj with express app
        app.set('studentcollection',studentcollection)
 
    //confirm db connection status
    console.log("DB connection success")
})
.catch(err=>console.log("Error in db connection",err))




//import API routes
const userApp=require('./API/user-api')

//import API routes
const AdminApp=require('./API/admin-api')




//if path starts with user-api,send req to userApp
app.use('/user-api',userApp)

//if path starts with user-api,send req to userApp
app.use('/admin-api',AdminApp)

//express error handler
app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
})

//assign port number
const port=process.env.PORT || 5000;
app.listen(port,()=>console.log(`webserver on port ${port}`))



