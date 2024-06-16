
//create admin api app
const exp=require('express')
const AdminApp=exp.Router();

// const bcryptjs=require('bcrypt')
//const expressAsyncHandler=require("express-async-handler")
// const jwt=require('jsonwebtoken');
// const verifyToken=require('../Middlewares/verifyToken')
const { use } = require('react');
// require('dotenv').config()
const commonApp=require('./common-api')

AdminApp.get('/test-admin',(req,res)=>{
    res.send({message:"This from admin api"})
})

let studentcollection;
//get student collection app(middleware)
AdminApp.use((req,res,next)=>{
    studentcollection=req.app.get('studentcollection')
    next()
})




//export author app
module.exports=AdminApp;