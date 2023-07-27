require('dotenv').config()
const express = require('express');
const mongoose= require('mongoose');
const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');
const hotelsRoute = require('./routes/hotels.js');
const roomsRoute = require('./routes/rooms.js');
const cookieParser=require('cookie-parser')
const cors = require('cors');
const app = express();

app.use(cors()); 
//middleware
app.use(express.json());
app.use(cookieParser());//for cookies


app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
const connect=async() =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('listening on port 4000,connected to database ');
    }catch(err){
          console.log('error connecting to database');
    }
}

app.listen(process.env.PORT,()=>{
     connect();
})