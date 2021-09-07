const notes = require('express').Router();
const { readFromFile, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET - retrieve existing note data
notes.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// //POST - for new note
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text} = req.body; 

    if (req.body){
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };
        
        writeToFile(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`)
    } else {
        res.error('Error in adding note');
      }
});

module.exports = notes;