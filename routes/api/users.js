const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken'); // for our session tokens
const passport = require('passport');
const keys = require('../../frontend/src/config/keys');
const router = express.Router();
const User = require("../../models/User"); // get User mongoose object
const validateSignUpInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

router.post("/signup", (req, res) => {
    const { errors, isValid } = validateSignUpInput(req.body);
    
    if(!isValid) {
        return res.status(404).json(errors);
    }

    User.findOne({ username: req.body.username })
        .then(user => {
            // determine if username already exists
            if(user) {
                errors.username = "Account with this username is already exists";
                return res.status(404).json(errors);
            } else {
                const newUser = new User({
                    username: req.body.username,
                    password: req.body.password
                });
                // encrypt password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash; // password is encrypted
                        newUser.save()
                            .then(user => {
                                const payload = { id: user.id, username: user.username };
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
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});



router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if(!isValid) {
        return res.status(404).json(errors);
    }

    User.findOne({username: req.body.username})
        .then(user => {
            if(!user) {
                return res.status(404).json({username: 'This user does not exist'});
            }

            bcrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = { id: user.id, username: user.username };
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
                    } else {
                        res.status(422).json({username: "Invalid Username Password Combination"});
                    }
                })
        })
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username
    });
})

module.exports = router;