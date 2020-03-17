const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken'); // for our session tokens
const passport = require('passport');
const keys = require('../../config/keys');
const router = express.Router();
const User = require("../../models/User"); // get User mongoose object
const validateSignUpInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

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
                        .then(user => {
                            const payload = { id: user.id, email: user.email };
                            jwt.sign(
                                payload,
                                keys.secretToken,
                                // Tell the key to expire in one hour
                                {expiresIn: 3600},
                                (err, token) => {
                                    res.json({
                                        success: true,
                                        token: 'Bearer ' + token
                                    });
                                }
                            );
                        })
                })
            })
        })
});



router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.send(404).json(errors);
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if(!user) {
                return res.status(404).json({email: 'This user does not exist'});
            }

            bcrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = { id: user.id, email: user.email };
                        jwt.sign(
                            payload,
                            keys.secretToken,
                            // Tell the key to expire in one hour
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            }
                        );
                    }
                })
        })
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email
    });
  })

module.exports = router;