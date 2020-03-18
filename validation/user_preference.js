const Validator = require('validator');
const validText = require('./valid_text');

const validateUserPreference = data => {

    data.distance = validText(data.distance) ? data.distance : "";
    data.price = validText(data.price) ? data.price : "";
    data.foodType = validText(data.foodType) ? data.foodType : "";

    const errors = {};
    
    if(Validator.isEmpty(data.distance)) {
        errors.distance = "Tell us how far you're willing to travel";
    }

    if(Validator.isEmpty(data.price)) {
        errors.price = "Tell us how much you're looking to spend";
    }

    if(Validator.isEmpty(data.foodType)) {
        errors.foodType = "Tell us what you're craving right now";
    }

    return {
        errors,
        hasErrors: Object.values(errors).length !== 0
    }

}

module.exports = validateUserPreference;