// const express = require('express');

// //modular routers for notes
// const notesRouter = require('./notes');

// const app = express();

// //initialize routes imported
// app.use('/notes', notesRouter);

// module.exports = app;

const path = require('path');

module.exports = function (app) {
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });
    
}