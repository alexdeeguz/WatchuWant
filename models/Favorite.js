const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    restaurantId:{
        type: String,
        required: true,
        unique: true
    },
    date:{
        type: Date, 
        default: Date.now
    }
})

module.exports = Favorites = mongoose.model('Favorite', FavoriteSchema)