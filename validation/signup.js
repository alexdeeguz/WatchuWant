const Validator = require("validator");
const validText = require('./valid_text');

const validateSignUpInput = data => {
    data.username = validText(data.username) ? data.username : "";
    data.password = validText(data.password) ? data.password : "";
    
    const errors = {};
    if(Validator.isEmpty(data.username)) {
        errors.username = "Username is required";
    }

    if(!Validator.isLength(data.username, { min: 4 })) {
        errors.username = "Username must be at least 4 characters"
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    if(Validator.isEmpty(data.password2)) {
        errors.password = "Please confirm password";
    }

    if (data.password2 !== data.password) {
        errors.password = "Passwords must match";
    }

    if(!Validator.isLength(data.password, { min: 6 })) {
        errors.password = "Password must have at least 6 characters"
    }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0 // valid if there are NO errors
    }
}

module.exports = validateSignUpInput;