//dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
const notes = require(path.join(__dirname, "../db/db.json"))

const app = express();
const notesPath = path.join(__dirname, "../db/db.json");

//route to get all saved notes
app.get("/api/notes", function(req, res) {
    return res.json(JSON.parse(fs.readFileSync(notesPath)));
});

//route to post a new note
app.post("/api/notes", function(req, res) {
    let newNote = req.body;

    notes.push(newNote);
    newNote.id = JSON.stringify(Date.now());
    fs.writeFileSync(notesPath, JSON.stringify(notes));

    return res.json(newNote);
});

//route to delete a post
app.delete("/api/notes/:id", function(req, res) {
    let noteId = parseInt(req.params.id);

    let filteredNotes = notes.filter(note => note.id != noteId);

    fs.writeFileSync(notesPath, JSON.stringify(filteredNotes));
});

module.exports = app;