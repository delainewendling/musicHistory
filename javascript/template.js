"use strict";

//pull in the template
var songTemplate = require('../lib/templates/data-template.hbs'),
    DOMInt = require('./DOMHandler.js'),
    database = require('./dbInteraction.js');

//Bind events
$(document).on('click', '.deleteBtn', deleteSong);
$(document).on('click', '.editBtn', getSong);
$(document).on('click', '#addSong', addSong);
$(document).on('click', '.editSong', saveEditedSong);


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

function getSong (e){
  let songToEdit = $(e.currentTarget).attr('key');
  DOMInt.goToEdit(songToEdit);
  database.getSong(songToEdit)
  .then((song)=>{
    console.log("song", song);
    DOMInt.fillForm(song);
  });
}

function saveEditedSong (e){
  e.preventDefault();
  let songObj = buildSongObj(),
      songId = $(e.currentTarget).attr("id");
  console.log("Song Object", songObj);
  console.log("Song Id", songId);
  database.saveEdit(songObj, songId)
  .then((data)=>{
    reload();
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


