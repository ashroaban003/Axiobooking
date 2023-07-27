const { verifyAdmin,verifyToken,verifyUser }=require('../utils/verifyToken');
const express=require('express');
const User = require('../models/User'); 
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');

const router= express.Router();

router.post('/register',async (req,res) =>{
    const {username,email,password}=req.body;
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password,salt);
    try{
        const user=await User.create({
            username,
            email,
            password:hash,
        })
        jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT,{},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json({
                 id:user._id,
                username,
                isAdmin: user.isAdmin,
            })
        });
        
    }catch(e){
        res.status(500).json(e);
    }
})

router.post('/login',async (req,res) =>{
    const {username,password}=req.body;
    const salt = await bcrypt.genSaltSync(10);
  
    try{
        const user = await User.findOne({ username })
        if (!user) {
            res.send('Incorrect email')
         }
         const passtoken = await bcrypt.compare(password, user.password)
         if (!passtoken) {
            res.send("login failed")       
        }
         jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT,{},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json({
                 id:user._id,
                username,
                isAdmin: user.isAdmin,
            })
        });
      
    }catch(e){
        res.status(500).json(e);
    }
})

router.post('/logout',(req,res)=>{
    res.cookie('token','').json('logedout');
 })
 

router.get('/',async (req,res,next) =>{
    res.send("Welcome to the authenticated")
})

 module.exports =router;