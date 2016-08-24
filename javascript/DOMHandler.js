"use strict";

  //cache variables for navigation
  var $navBarElements = $('.navBar li');
  var $addMusic = $navBarElements.find("#addMusic");
  var $listMusic = $navBarElements.find("#listMusic");

  $navBarElements.on('click', hidePages);

  function hidePages (e){
    $('.page').addClass("hidden");
    showPage(e.target.hash);
  }

  //Go back to the home page
  function goHome (){
      $('#listMusicView').removeClass("hidden");
      $('#addMusicView').addClass("hidden");
      $listMusic.addClass("selected");
      $addMusic.removeClass("selected");
  }

  function goToEdit (songId){
    $('#addMusicView').removeClass("hidden").addClass("selected");
    $('#listMusicView').addClass("hidden").removeClass("selected");
    $('#addSong').hide();
    $('.addSongs').append(`<button class="editSong" id="${songId}"> Edit </button>`);
  }

  //Navigate to the page you want
  function showPage (id){
    if(id) {
      $(`${id}`).removeClass("hidden");
      $addMusic.addClass("selected");
      $listMusic.removeClass("selected");
    } else {
      goHome();
    }
  }

  function fillForm(song) {
    $("#newSongName").val(song.songTitle);
    $("#newArtist").val(song.artist);
    $("#newAlbum").val(song.albumTitle);
    $("#newGenre").val(song.genre);
  }

module.exports = {goHome, goToEdit, fillForm};

