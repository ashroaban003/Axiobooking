const { verifyAdmin,verifyToken,verifyUser }=require('../utils/verifyToken');
const express=require('express');
const User = require('../models/User'); 
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');



const router= express.Router();

router.put('/:id',verifyUser,  async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
})

router.delete('/:id',verifyUser, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        res.status(500).json(err);
      }
})
router.get('/:id',verifyUser,async(req,res) =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
})

router.get('/',verifyAdmin,async(req,res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
})


 module.exports =router;