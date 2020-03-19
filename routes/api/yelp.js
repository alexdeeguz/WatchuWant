const express = require("express");
const router = express.Router();
const axios = require('axios');

const yelpKey = require('../../config/keys').yelpAPIKey;
const yelpUrl = 'https://api.yelp.com/v3/businesses/search'; 
// const yelpUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'; 

router.get('/', (req, res) => {
  let {location, categories, limit, price, term, radius, rating} = req.query;
  const config = {
    headers: {'Authorization': `Bearer ${yelpKey}`},
    params: {
      location: location,
      categories: categories,
      limit, price, term, radius, rating
    }
  };

  axios.get(yelpUrl, config)
    .then( ans => res.jsonp(ans.data) )
    .catch( errors => res.jsonp(errors) );
});

router.get('/favorites', (req, res) => {
  // let { userId } = req.query;

  const config = {
    headers: {'Authorization': `Bearer ${yelpKey}`},
    params: {
      id: "iansdo123inasdfo" //id of restaurant
    }
  };

  axios.get(yelpUrl, config)
    .then( ans => res.jsonp(ans.data) )
    .catch( errors => res.jsonp(errors) );
});


module.exports = router;