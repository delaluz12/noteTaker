const notes = require('express').Router();
const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET - retrieve ALL existing note data & display to notes page & endpoint /api/notes
notes.get('/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.send(JSON.parse(data)))
);


//POST - for new note
notes.post('/notes', (req, res) => {

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`)
    } else {
        res.error('Error in adding note');
    }
});

// DELETE - for old notes
notes.delete('/notes/:id', (req, res) => {
    var noteId = req.params.id;

    if (noteId) {
        readAndDelete(noteId, './db/db.json');
        res.json('Note deleted successfully🚀');  
    } else {
        res.error('Error in deleting note');
    }


});

module.exports = notes;