const Validator = require("validator");
const validText = require('./valid-test');

const validateSignUpInput = data => {
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    
    const errors = {};
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    if(!Validator.isLength(data.password, { min: 6 })) {
        errors.password = "Password must have at least 6 characters"
    }
    
    return {
        errors,
        isValid: Object.values(errors).length === 0 // valid if there are NO errors
    }
}

module.exports = validateSignUpInput;