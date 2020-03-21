const express = require("express");
const router = express.Router();

const Preference = require("../../models/Preference");
const validateUserPreference = require("../../validation/user_preference");

router.post("/add",(req, res) => {

    const { errors, hasErrors } = validateUserPreference;

    if(hasErrors) {
        return res.send(404).json(errors);
    }

    const userPreference = new Preference({
        userID: req.body.userID,
        distance: req.body.distance,
        price: req.body.price,
        foodType: req.body.foodType
    })

    userPreference.save()
        .then(preference => res.json(preference))
        .catch(err => res.json(err))
})

// need the user in order to edit
router.patch("/edit", (req, res) => {
    const userID = req.body.userID;
    Preference.findOne({userID})
        .then(preference => {
            preference.distance = req.body.distance;
            preference.price = req.body.price;
            preference.foodType = req.body.foodType;
            preference.save()
                .then(pre => res.json(pre))
        })
        .catch(err => res.json(err))
})

// need the user in order to retrieve preferences to use for Yelp API
router.get("/retrieve", (req, res) => {
    const userID = req.query.userID;
    Preference.findOne({userID})
        .then(preference => res.json(preference))
})

module.exports = router;