const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({
        facilities: {
        type: String,
        required: true,
        },
        amenities: {
        type: String,
        required: true,
        },
        Placetype: {
        type: String,
        required: true,
        },
        saftey: {
        type: String,
        required: true,
        },
        image:{
            type: String,
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