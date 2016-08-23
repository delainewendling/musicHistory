"use strict";
  //required files for Browserify
  var getSongs = require('./load.js'),
      DOMInteraction = require('./DOMHandler.js');

  var arrayOfSongs = [];
  //cache variables for DOM printout
  var $target = $("#songContainer");
  var $template = $target.find("#songTemplate").html();
  var $moreButton = $target.find(".more");

  //cache variables for form
  var $songForm = $(".addSongs");
  var $submitButton = $songForm.find("#submit");

  //Bind events
  $submitButton.on('click', addSong);

  //Insert the songs to the DOM
  function insertSongs(data) {
    console.log("what's being printed?", data);
    var rendered = Mustache.to_html($template, data);
    $target.append(rendered);
    $('.deleteBtn').on('click', deleteSong);
    $('.more').on('click', showMoreSongs);
  }

  function addSong (e){
    e.preventDefault();
      var $songTitle = $songForm.find("#newSongName").val();
      var $artist = $songForm.find("#newArtist").val();
      var $album= $songForm.find("#newAlbum").val();
      var $genre = $songForm.find("#newGenre").val();
      getSongs.loadSongs()
      .then((data)=>{
        arrayOfSongs = data.songs;
        arrayOfSongs.push({"songTitle": $songTitle, "artist": $artist, "album": $album, "genre": $genre});
        DOMInteraction.goHome();
        $target.html("");
        insertSongs(data);
        $('input').val("");
      });
  }

  function deleteSong (e) {
    e.currentTarget.closest(".song").remove();
  }

  function showMoreSongs (e) {
    getSongs.loadMoreSongs()
    .then((data)=>{
      insertSongs(data);
      $('.more').hide();
      $target.append("<button class='less songButton'> < Less </button>");
    });
  }
module.exports = insertSongs;








