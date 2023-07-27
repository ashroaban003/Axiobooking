const express=require('express');
const Room=require("../models/Room")
const Hotel = require('../models/Hotel');
const { verifyAdmin,verifyToken,verifyUser }=require('../utils/verifyToken');
const router= express.Router();

//create 
router.post('/:hotelid',verifyAdmin,async (req,res) =>{
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
  
    try {
      const savedRoom = await newRoom.save();
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $push: { rooms: savedRoom._id },
        });
      } catch (e) {
        res.status(500).json(e);
      }
      res.status(200).json(savedRoom);
    } catch (e) {
        res.status(500).json(e);
    }
})
//update
router.put('/:id',verifyAdmin,async(req,res)=>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedRoom);
      } catch (err) {
        res.status(500).json(err);
      } 
})
//updateroomawailability
router.put('/availability/:id',async (req,res)=>{
  try{
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  }catch (err) {
    res.status(500).json(err);
  } 
})
//deleteroom
router.delete('/:hotelid/:id',verifyAdmin,async (req,res)=>{
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      res.status(500).json(err);
    }
    res.status(200).json("Room has been deleted.");
  }catch (err) {
    res.status(500).json(err);
  } 
})
//getroom
router.get("/:id", async  (req, res)=> {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  }catch (err) {
    res.status(500).json(err);
  }
});
//getrooms
router.get("/rooms", async (req, res)=> {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json(err);
  }
})



 module.exports =router;