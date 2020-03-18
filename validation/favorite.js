const Validator = require('validator');
const validRes = require('./valid_res');

module.exports = function validateFavoriteInput(data){
    let errors = {};
    data.restaurantId = validRes(data.restaurantId) ? data.restaurantId : "";
    data.userId = validRes(data.userId) ? data.userId : "";

    if (Validator.isEmpty(data.restaurantId)){
        errors.restaurantId = "RestaurantId needed"
    };

    if (Validator.isEmpty(data.userId)){
        errors.userId = "userId needed"
    };

    return{
        errors,
        isValid: Object.keys(errors).length === 0
    }
}