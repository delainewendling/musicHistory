"use strict";

function getSongs (callback){
  return new Promise (function (resolve, reject){
    $.ajax({
      url: 'https://music-history-b5816.firebaseio.com/songs.json',
    }).done(function(songData){
      resolve(songData);
    });
  });
}

function deleteSong(songId){
  return new Promise (function (resolve, reject){
    $.ajax({
      url: `https://music-history-b5816.firebaseio.com/songs/${songId}.json`,
      method: "DELETE"
    }).done(function(){
      resolve();
    });
  });
}
// function addSong (songformObj){
//   return new Promise (function (resolve, reject){
//     $.ajax({
//       url: 'https://music-history-b5816.firebaseio.com/laurenDaigle.json',
//       type: 'POST',
//       data: JSON.stringify(songFormObj),
//       dataType: "json"
//       //firebase gives us a unique id for everything we add to the database
//     }).done(function(songId){
//       resolve(songId);
//     });
//   });
// }

module.exports = {getSongs, deleteSong};