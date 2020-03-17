const router = express.Router();
const yelpKey = require('../../config/keys').yelpApiKey;
// const yelpUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'; 
const yelpUrl = 'https://api.yelp.com/v3/businesses/search'; 

router.get('/yelp', (req, res) => {
    console.log('getting /yelp');

    return axios.get({
        method: 'GET',
        url: yelpUrl,
        headers: { Authorization: `Bearer ${yelpKey}` },
        contentType: 'jsonp',
        params: req
    })
    .then( ans => console.log(ans) )
    .then( ans => res.json(ans) );
});

module.exports = router;