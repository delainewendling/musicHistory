"use strict";

//pull in the template
var songTemplate = require('../lib/templates/data-template.hbs'),
    database = require('./dbInteraction.js');

//Add the view to the DOM (the rendered view )
function insertSongs (songData){
  $("#songContainer").html(songTemplate(songData));
  $('.deleteBtn').click(deleteSong);
  $('.editBtn').click(editSong);
}

function deleteSong (e){
  database.deleteSong(e.currentTarget.classList[0])
  .then(()=>{
    reload();
  });
}

function editSong (e){
  database.deleteSong(e.currentTarget.id)
  .then(()=>{
    reload();
  });
}

function reload(){
  location.reload();
}

module.exports = {insertSongs, reload};


