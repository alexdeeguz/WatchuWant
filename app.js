// allows routing in our app
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const passport = require("passport");

// api routes
const users = require("./routes/api/users");
const preferences = require("./routes/api/preferences");
const yelp = require('./routes/api/yelp');
const favorites = require('./routes/api/favorites');
const visited = require('./routes/api/visited');


// middleware
app.use(passport.initialize());
require("./frontend/src/config/passport")(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// allows use of mongodb
const mongoose = require('mongoose');
const db = require('./frontend/src/config/keys').mongoURI;

// connect to the mongo database
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


app.use('/api/restaurants', favorites);
app.use("/api/users", users); // for user login, signup
app.use("/api/preferences", preferences); // for user add, edit preferences
app.use('/api/yelp', yelp);
app.use('/api/visited', visited);


// set up the app port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}