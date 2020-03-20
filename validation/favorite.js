const Validator = require('validator');
// const validRes = require('./valid_res');
const validText = require('./valid_text');

module.exports = function validateFavoriteInput(data){
    let errors = {};
    data.restaurantId = validText(data.restaurantId) ? data.restaurantId : "";
    data.userId = validText(data.userId) ? data.userId : "";
    data.name = validText(data.name) ? data.name : "";
    data.imageUrl = validText(data.imageUrl) ? data.imageUrl : "";
    data.location = validText(data.location) ? data.location : "";

    if (Validator.isEmpty(data.restaurantId)){
        errors.restaurantId = "RestaurantId needed"
    };

    if (Validator.isEmpty(data.userId)){
        errors.userId = "userId needed"
    };

    if (Validator.isEmpty(data.name)) {
        errors.name = "Resturant name needed"
    };

    if (Validator.isEmpty(data.imageUrl)) {
        errors.imageUrl = "ImageUrl needed"
    };

    if (Validator.isEmpty(data.location)) {
        errors.location = "location needed"
    };

    return{
        errors,
        isValid: Object.keys(errors).length === 0
    }
}