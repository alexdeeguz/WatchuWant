const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    restaurantId:{
        type: String,
        required: true,
        index: true,
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

FavoriteSchema.index( { "restaurantId": 1, "userId": 1 }, { unique: true } );
module.exports = Favorites = mongoose.model('Favorite', FavoriteSchema);