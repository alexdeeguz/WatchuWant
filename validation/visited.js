const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateVisitedInput(data){
    let errors = {};
    data.restuarantId = validText(data.restuarantId) ? data.restuarantId : "";
    data.name = validText(data.name) ? data.name : "";
    data.imageUrl = validText(data.imageUrl) ? data.imageUrl : "";
    data.userId = validText(data.userId) ? data.userId : "";
    data.location = validText(data.location) ? data.location : "";

    if (Validator.isEmpty(data.restaurantId)){
        errors.restaurantId = "RestaurantId needed"
    };

    if (Validator.isEmpty(data.name)){
        errors.name = "Resturant name needed"
    };

    if (Validator.isEmpty(data.imageUrl)){
        errors.imageUrl = "ImageUrl needed"
    };

    if (Validator.isEmpty(data.location)){
        errors.location = "location needed"
    };

    if (Validator.isEmpty(data.userId)){
        errors.userId = "userId needed"
    };

    return{
        errors,
        isValid: Object.keys(errors).length === 0
    }
}