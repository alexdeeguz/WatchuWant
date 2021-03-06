const express = require("express");
const router = express.Router();
const validateFavoriteInput = require('../../validation/favorite');
const Favorite = require('../../models/Favorite');

router.get("/test", (req, res) => res.json({ msg: "This is the favorites route" }));
// post
router.post('/',
    (req, res)=>{

        const { errors, isValid } = validateFavoriteInput(req.body);
        if (!isValid){
            return res.status(400).json(errors);   
        }

        const newFavorite = new Favorite({
            restaurantId: req.body.restaurantId,
            userId: req.body.userId,
            imageUrl: req.body.imageUrl,
            name: req.body.name,
            location: req.body.location
        })

        newFavorite
            .save()
            .then(fav => res.json(fav))
            .catch(err=> res.status(400).json(err));
    }
)

router.delete('/:id',

    (req, res)=>{
        Favorite.deleteOne({_id: req.params.id})
            .then(()=>{
                res.json("Restaurant removed from favorite")
            })
            .catch( err => res.status(500).json({favoritedeletion: 'Could not remove restaurant'}))
    }
)
// npm run dev:debug

router.get('/:id',
    (req,res)=>{
        Favorite
            .findById(req.params.id)
            .then(fav => res.json(fav))
            .catch(err => res.status(400).json(err))
    }
)

// get all
router.get('/user/:userId',
    (req, res)=>{
        Favorite
            .find({userId: req.params.userId})
            .sort( {date: -1})
            .then(favs => res.json(favs))
            .catch(err => res.status(400).json(err))
    }
)

module.exports = router;