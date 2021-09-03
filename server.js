const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.port || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup public folder for js, css
app.use(express.static('public'));

//ROUTES

//GET - home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//GET - notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// GET - wild card return to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});


app.listen(PORT, function () {
    console.log("APP listening on PORT: " + PORT);

})