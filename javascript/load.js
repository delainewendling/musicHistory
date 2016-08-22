"use strict";

var result = {};
var moreSongs = [];

function loadSongs (){
  return new Promise(function (resolve, reject){
    $.getJSON('JSON/songInfo.json')
       .then((res) => {
        result = res;
        resolve(result);
    });
  });
}

function loadMoreSongs (){
  return new Promise(function (resolve, reject){
    $.getJSON('JSON/moreSongs.json')
       .then((res) => {
        moreSongs = res;
        resolve(moreSongs);
    });
  });
}

module.exports = {loadSongs, loadMoreSongs};


// var firstPromise = $.getJSON("songInfo.json");
  // var secondPromise = $.getJSON("moreSongs.json");

  // //Grabbing the data
  // // app.loadSongs = function(){
  // //   $.when(firstPromise, secondPromise)
  // //     .done(function(firstData, secondData) {
  // //       result = firstData[0];
  // //       songs = firstData[0].songs;
  // //       moreSongs = secondData[0].songs;
  // //   });
  // // }

