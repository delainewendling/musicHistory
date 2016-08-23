"use strict";

//cache variables
var $dropDown = $(".songForm");
var $artistDropDown = $dropDown.find('.artist');
var $artistSelection = $dropDown.find("#artist option");
//Bind events
$artistSelection.on('change', showArtists);

function artistAlbums (){
  console.log("changed");
  console.log("clicked on", $artistDropDown.val());

}


