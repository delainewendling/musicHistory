"use strict";
$(document).ready(()=>{
var artists = require('./load.js');
//cache variables
var $dropDown = $(".songForm");
var $artistDropDown = $dropDown.find('.artist');

hideAlbums();
//Bind events
// $(".dropdown-artist li a").click(findArtist);
// $(".dropdown-album li a").click(filterAlbums);

//Want to hide the album choices until someone has chosen an artist
function hideAlbums(){
  $(".album").hide();
}
//figures out the id of the artist chosen and then loads the songs from that artist in the DOM
function findArtist (e){
  let artistName = e.currentTarget.id;
  artists[`load${artistName}`]()
  .then((songs)=>{
    $("#songContainer").html("");
    // controller(songs);
    artistAlbums(artistName);
  });
}

function artistAlbums (artistName){
  $('.albumAlert').hide();
  hideAlbums();
  $(`.${artistName}`).show();
}

function filterAlbums (e){
  console.log("You clicked on: ", e.currentTarget.classList[2].split("-")[1]);
}

});





