const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/index.js')

const PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api)

//setup public folder for js, css
app.use(express.static('public'));

//ROUTES

// index and notes html pages routes
require('./routes/html')(app);



app.listen(PORT, function () {
    console.log("APP listening on PORT: " + PORT);

})