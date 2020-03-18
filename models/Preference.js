const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreferenceSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    }
})

module.exports = Preference = mongoose.model('Preference', PreferenceSchema);