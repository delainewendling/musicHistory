"use strict";

//pull in the template
var songTemplate = require('../lib/templates/data-template.hbs');


//Add the view to the DOM (the rendered view )
function insertSongs (songData){
  $("#songContainer").append(songTemplate(songData));
}

module.exports = insertSongs;


