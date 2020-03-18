const express = require("express");
const router = express.Router();
const axios = require('axios');

const yelpKey = require('../../config/keys').yelpAPIKey;
const yelpUrl = 'https://api.yelp.com/v3/businesses/search'; 
// const yelpUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'; 

const config = {
    headers: {'Authorization': `Bearer ${yelpKey}`},
    params: {
      location: 'san francisco',
      categories: 'breakfast_brunch',
      limit: 10
    }
  };

router.get('/', (req, res) => {
    axios.get(yelpUrl, config)
    .then( ans => res.jsonp(ans.data) )
    .catch( errors => console.log(errors) );
});


module.exports = router;