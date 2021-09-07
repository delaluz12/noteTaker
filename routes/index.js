const express = require('express');

//modular router imports
const notesRouter = require('./notes');

const app = express ();

// initialize routes
app.use('/notes', notesRouter);

module.exports = app;