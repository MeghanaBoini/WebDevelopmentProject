//create user api app
const exp=require('express')
const userApp=exp.Router();
const bcryptjs=require('bcrypt')
const expressAsyncHandler=require("express-async-handler")
const jwt=require('jsonwebtoken');
// // const verifyToken=require('../Middlewares/verifyToken')
// const { use } = require('react');
require('dotenv').config()
const commonApp=require('./common-api')

userApp.get('/test-user',(req,res)=>{
    res.send({message:"This from user api"})
})

let studentcollection;
// let coursescollection;
//get user collection app(middleware)
userApp.use((req,res,next)=>{
    studentcollection=req.app.get('studentcollection')
    // coursescollection=req.app.get('coursescollection')
    next()
})

//user registration route
userApp.post('/user',expressAsyncHandler(async(req,res)=>{
    //get user resource from client
    const newUser=req.body;
    //check for duplicate user basec on username
    const dbuser=await studentcollection.findOne({username:newUser.username})
    //if user found in db
    if(dbuser!=null){
        res.send({message:"User existed"})
    }else{
        //hash the password
        const hashedPassword=await bcryptjs.hash(newUser.password,6)
        //replace plain password with hashed password
        newUser.password=hashedPassword;
        // create user
        await studentcollection.insertOne(newUser)
        //send response
        res.send({message:"User created"})
    }
}))


//install: npm install express-async-handler (to handle the asynchronous errors in the code) it will handle errors to the handler that we are provide, so no need to write try-catch

//user login route
userApp.post('/login',expressAsyncHandler(async(req,res)=>{
    //get cred obj from client
    const userCred=req.body;
    //check for username
    const dbuser=await studentcollection.findOne({username:userCred.username})
    if(dbuser===null){
        res.send({message:"Invalid username"})
    }else{
    //check for password
    const status=await bcryptjs.compare(userCred.password,dbuser.password)
    if(status===false){
        res.send({message:"Invalid password"})
    }else{
        //create jwt token and encode it (for this install (npm install jsonwebtoken)) here we are using username to find which user is login into the account
        const signedToken=jwt.sign({username:dbuser.username},process.env.SECRET_KEY,{expiresIn:'1d'})
        //send response
        res.send({message:"login success",token:signedToken,user:dbuser})
        }
    }
})
 )

// //get courses of all users
// // userApp.get('/articles',verifyToken,expressAsyncHandler(async(req,res)=>{
// //     //get courses from express app
// //     const acoursescollection=req.app.get('coursescollection')
// //     //get all articles
// //     let articlesList=await articlescollection.find({status:true}).toArray()
// //     //send response
// //     res.send({message:"articles",payload:articlesList})
// // }))




//export user app
module.exports=userApp;