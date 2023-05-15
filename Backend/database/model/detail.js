const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({
        bedrooms:{
            type:String,
            required: true,
        },
        rooms:{
            type:String,
            required: true,
        },
        bathrooms:{
            type:String,
            required: true,
        },
        parkings:{
            type:String,
            required: true,
        },
        amenities: {
        type: Array,
        required: true,
        },
        villa:{
            type:String,
            
        },
        house:{
            type:String,
            
        },
        ger:{
            type:String,
           
        },
        apartment:{
            type:String,
        
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