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

module.exports = {goHome, showPage};

