// allows routing in our app
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const passport = require("passport");

const path = require('path');

// build folder in front end
app.use(express.static(path.join(__dirname, './front-end', 'build')));

// for any path, go into the index.html file that's in the build, which is in the front-end folder
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './front-end', 'build', 'index.html'));
})

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

// route paths
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './front-end', 'build', 'index.html'));
})


app.use('/api/restaurants', favorites);
app.use("/api/users", users); // for user login, signup
app.use("/api/preferences", preferences); // for user add, edit preferences
app.use('/api/yelp', yelp);
app.use('/api/visited', visited);


// set up the app port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));