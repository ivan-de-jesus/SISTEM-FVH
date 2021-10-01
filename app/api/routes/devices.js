const express = require('express');
const router = express.Router();

//localhost:3001/api1/device 

import Device from '../models/device.js';

router.get("/device", async, (req, res) =>{

    try {
        const userId = req.userData._id;
    
        const devices = await Device.find({ userId: userId });

        const toSend = {
            status: "success",
            data: devices
        };

        res.json(toSend);

    } catch (error) {
        const toSend = {
          status: "error",
          error: error
        }
    
        return res.status(500).json(toSend);
    }

});

router.post("/device", async, (req, res) =>{
    try {
        const userId = req.userData._id;
        var newDevice = req.body.newDevice;
    
        newDevice.userId = userId;
        newDevice.createdTime = Date.now();
    
        const device = await Device.create(newDevice);
    
        const toSend = {
          status: "success"
        }
    
        return res.json(toSend);
    
      } catch (error) {
        console.log("ERROR CREATING NEW DEVICE");
        console.log(error);
    
        const toSend = {
          status: "error",
          error: error
        }
    
        return res.status(500).json(toSend);
    }
});

router.delete("/device", (req, res) =>{
   
});

router.put("/device", (req, res) =>{
   
});


module.exports = router;