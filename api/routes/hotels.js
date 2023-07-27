const express=require('express');
const Hotel = require('../models/Hotel');
const Room=require("../models/Room")
const { verifyAdmin,verifyToken,verifyUser }=require('../utils/verifyToken');
const router= express.Router();

//post
router.post("/",verifyAdmin,async (req, res) => {
    const newHotel=new Hotel(req.body);
    try{
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch(e){
        res.status(400).json(e);
    }
})
//update
router.put("/:id",verifyAdmin, async(req, res) => {
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
        res.status(200).json(updateHotel);
    } catch(e){
        res.status(400).json(e);
    }
})
//delete
router.delete("/:id", verifyAdmin,async (req,res) => {
    try{
       await Hotel.findByIdAndDelete(req.params.id);
       res.status(200).json("deleted successfully");
    }catch(e){
        res.status(400).json(e);
    }
})

//get
router.get('/find/:id',async (req,res) =>{
    try{
        const hotel=await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(e){
        res.status(400).json(e);
    }
})
//get all
router.get('/', async (req,res) =>{
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
        res.status(400).json(err);
    }
  
})

//count and gethotels
router.get("/countByCity", async (req, res)=>{
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/countByType",  async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
        res.status(400).json(err);
    }
  });

router.get("/room/:id", async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
        res.status(400).json(err);
    }
  });


 module.exports =router;