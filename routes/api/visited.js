const express = require("express");
const router = express.Router();
const Visited = require('../../models/Visited');
const validateVisitedInput = require('../../validation/visited');


router.get("/test", (req, res) => res.json({ msg: "This is the visited route" }));
// post
router.post('/', (req, res) => {
    const { errors, isValid } = validateVisitedInput(req.body);
    if (!isValid){
        return res.status(400).json(errors);   
    }
    const {
        restaurantId, userId, imageUrl, name, location
    } = req.body;

    const newVisited = new Visited({
        restaurantId, userId, imageUrl, name, location
    });

    if (Visited.find({restaurantId, userId}) !== null)
        return res.json('restaurant already in visited');

    newVisited
        .save()
        .then(fav => {
            console.log('successfully added restaurant to visited');
            res.json(fav);
        })
        .catch(err=> {
            res.status(400).json(err);
        });
    }
);

// for testing purposes, visited delete function in the back end
router.delete('/:id', (req, res) => {
    Visited.deleteOne({_id: req.params.id})
        .then(()=>res.json("Restaurant removed from visited"))
        .catch( err => res.status(500).json({visitedDeletion: 'Could not remove restaurant'}))
    }
);

router.get('/:id', (req,res) => {
    Visited
        .findById(req.params.id)
        .then(fav => res.json(fav))
        .catch(err => res.status(400).json(err))
    }
);

// get all
router.get('/user/:userId', (req, res) => {
    Visited
        .find({userId: req.params.userId})
        .sort( {date: -1})
        .then(favs => res.json(favs))
        .catch(err => res.status(400).json(err))
    }
);

module.exports = router;