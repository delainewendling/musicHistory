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
      console.log("song ID", songId);
      resolve();
    });
  });
}
function addSong (songformObj){
  return new Promise (function (resolve, reject){
    $.ajax({
      url: 'https://music-history-b5816.firebaseio.com/songs.json',
      type: 'POST',
      data: JSON.stringify(songformObj),
      dataType: "json"
      //firebase gives us a unique id for everything we add to the database
    }).done(function(songId){
      resolve(songId);
    });
  });
}

function getSong(songId) {
  return new Promise ((resolve, reject)=>{
    $.ajax({
      url: `https://music-history-b5816.firebaseio.com/songs/${songId}.json`
    }).done((song)=>{
      resolve(song);
    }).fail((error)=>{
      reject(error);
    });
  }); //end of promise
}

function saveEdit(songFormObj, songId) {
  return new Promise ((resolve, reject)=>{
    $.ajax({
      url: `https://music-history-b5816.firebaseio.com/songs/${songId}.json`,
      method: "PUT",
      data: JSON.stringify(songFormObj)
    }).done((data)=>{
      resolve(data);
    });
  }); //end of promise
}

module.exports = {getSongs, deleteSong, addSong, getSong, saveEdit};