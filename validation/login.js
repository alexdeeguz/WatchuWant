const Validator = require('validator');
const validText = require('./valid_text');


const validateLoginInput = data => {
    
    data.username = validText(data.username) ? data.username : "";
    data.password = validText(data.password) ? data.password : "";
    
    const errors = {};

    // if(!Validator.isEmail(data.email)) {
    //     errors.email = "Email is invalid";
    // }

    if(Validator.isEmpty(data.username)) {
        errors.username = "Username is required";
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

module.exports = validateLoginInput;