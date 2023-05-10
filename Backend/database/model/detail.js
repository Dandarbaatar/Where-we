const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({
        bedrooms:{
            type: Array,
            required: true,
        },
        rooms:{
            type: Array,
            required: true,
        },
        bathrooms:{
            type: Array,
            required: true,
        },
        parkings:{
            type: Array,
            required: true,
        },
        amenities: {
        type: Array,
        required: true,
        },
        Placetype: {
        type: Array,
        required: true,
        },
        saftey: {
        type: Array,
        required: true,
        },
        image:{
            type: Array,
        },
        price:{
        type:String,
        },
        shortperiod:{
            type:String,
        },
        mediumperiod:{
            type:String,
        },
        longperiod:{
            type:String,
        },
        description:{
            type:String,
            required:true,
        },
        userId:{
            type:String,
            required:true,
        },
        createdAt: { type: Date, default: Date.now() },
        
    });
    
    const DetailModel = mongoose.model("detail", DetailSchema);
    
    module.exports = DetailModel;