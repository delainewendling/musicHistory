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


