const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({

        bedrooms:{
            type:String,
        },
        rooms:{
            type:String,
        },
        bathrooms:{
            type:String,
            
        },
        parkings:{
            type:String,
            
        },
        Placetype:{
            type:String,
            
        },
        // house:{
        //     type:String,
        // },
        // ger:{
        //     type:String,
        // },
        // apartment:{
        //     type:String,
        
        // },
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
        },
        userId:{
            type:String,
            required:true,
        },
        teleision:{
            type:String,
        },
        wifi:{
            type:String,
        },
        washer:{
            type:String,
        },
        balcony:{
            type:String,
        },
        cleaner:{
            type:String,
        },
        radio:{
            type:String,
        },
        lift:{
            type:String,
        },
        aircondioner:{
            type:String,
        },
        sanitizers:{
            type:String,
        },
        fire:{
            type:String,
        },
        daily:{
            type:String,
        },



    smoke:{
        type:String,
    },

        createdAt: { type: Date, default: Date.now() },
        
    });
    
    const DetailModel = mongoose.model("detail", DetailSchema);
    
    module.exports = DetailModel;

    //ehnii 8
    // daraagiin 8
    // daraagiin 4
    // daraagiin 2
    // suuliin 1