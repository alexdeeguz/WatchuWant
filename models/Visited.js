const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VisitedSchema = new Schema({
    restaurantId:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required:true
    },
    userId:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required:true
    },
    date:{
        type: Date, 
        default: Date.now
    }
})

module.exports = Visited = mongoose.model('Visited', VisitedSchema)