"use strict";
$(document).ready(()=>{
var artists = require('./load.js'),
    controller = require('./controller.js');
//cache variables
var $dropDown = $(".songForm");
var $artistDropDown = $dropDown.find('.artist');

//Bind events
$(".dropdown-artist li a").click(findArtist);

//figures out the id of the artist chosen and then loads the songs from that artist in the DOM
function findArtist (e){
  let artistName = e.currentTarget.id;
  artists[`load${artistName}`]()
  .then((songs)=>{
    $("#songContainer").html("");
    controller(songs);
    artistAlbums(artistName);
  });
}

function artistAlbums (artistName){
  console.log("inside artistAlbums function", artistName);
  $(".album").hide();
  $(`.${artistName}`).show();
}

});





