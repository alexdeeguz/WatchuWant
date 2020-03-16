const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();
const User = require("../../models/User"); // get User mongoose object
const validateSignUpInput = require('../../validation/signup');

router.post("/signup", (req, res) => {

    
    const { errors, isValid } = validateSignUpInput(req.body);
    
    if(!isValid) {
        return res.send(404).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            // determine if email already exists
            if(user) {
                errors.email = "Account with this email is already exists";
                return res.status(404).json(errors);
            }
            
            const newUser = new User({
                email: req.body.email,
                password: req.body.password
            });
            // encrypt password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash; // password is encrypted
                    newUser.save()
                        .then(user => console.log(user))
                        .catch(err => console.log(err))
                })
            })
        })
})

module.exports = router;