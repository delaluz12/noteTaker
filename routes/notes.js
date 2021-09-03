const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

//GET - retrieve existing note data
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data)=> res.json(JSON.parse(data)));
})

//POST - for new note
notes.post('/', (req, res)=>{
    console.log(req.body);
});

module.exports = notes; 