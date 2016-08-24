"use strict";

//pull in the template
var songTemplate = require('../lib/templates/data-template.hbs'),
    DOMInt = require('./DOMHandler.js'),
    database = require('./dbInteraction.js');

//Bind events
$(document).on('click', '.deleteBtn', deleteSong);
$(document).on('click', '.editBtn', editSong);
$(document).on('click', '#submit', addSong);

function addSong (e){
  e.preventDefault();
  let songformObj = buildSongObj();
  database.addSong(songformObj)
  .then(()=>{
    DOMInt.goHome();
    $('input').val("");
    reload();
  });
}

//Add the view to the DOM (the rendered view )
function insertSongs (songData){
  $("#songContainer").html(songTemplate(songData));
}

function deleteSong (e){
  let songToDelete = $(e.currentTarget).attr('key');
  console.log("song", songToDelete);
  database.deleteSong(songToDelete)
  .then(()=>{
    reload();
  });
}

function editSong (e){
  DOMInt.goToEdit();
  let songToEdit = $(e.currentTarget).attr('key');
  console.log("song", songToEdit);
  database.getSong(songToEdit)
  .then((song)=>{
    console.log("song", song);
    DOMInt.fillForm(song);
  });
}

function buildSongObj (){
  var songformObj = {
    "songTitle": $("#newSongName").val(),
    "artist": $("#newArtist").val(),
    "albumTitle": $("#newAlbum").val(),
    "genre": $("#newGenre").val()
  };
  return songformObj;
}

function reload(){
  location.reload();
}

module.exports = {insertSongs, reload};


