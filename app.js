// allows routing in our app
const express = require('express');
const app = express();
const users = require("./routes/api/users");
const yelp = require('./routes/api/yelp');
const bodyParser = require('body-parser');
const passport = require("passport");
// middleware
app.use(passport.initialize());
require("./config/passport")(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allows use of mongodb
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

// connect to the mongo database
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// route paths
app.use("/api/users", users);
app.use('/api/yelp', yelp);

// set up the app port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));