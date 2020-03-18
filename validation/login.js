const Validator = require('validator');
const validText = require('./valid_text');


const validateLoginInput = data => {
    
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    
    const errors = {};

    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required"
    }

    return {
        errors,
        isValid: Object.values(errors).length === 0
    }
}

module.exports = validateLoginInput;