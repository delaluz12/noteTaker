// variables for js routes in file system
const express = require('express');
const html = require('./routes/html')
const api = require('./routes/notes')

// start app and create port
const app = express();
const PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//setup public folder for js, css
app.use(express.static('public'));

//ROUTES

// index and notes html pages routes
app.use('/api', api);
app.use('/', html);




app.listen(PORT, function () {
    console.log("APP listening on PORT: " + PORT);

})