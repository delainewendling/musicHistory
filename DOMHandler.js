var App = (function(app){
    //cache variables for DOM printout
  var $target = $("#songContainer")
  var $template = $target.find("#songTemplate").html()
  //cache variables for form
  var $songForm = $(".addSongs")
  var $songTitle = $songForm.find("#songName").val()
  var $artist = $songForm.find("#artist").val()
  var $album= $songForm.find("#album").val()
  var $genre = $songForm.find("#genre").val()
  var $submitButton = $songForm.find("#submit");
  //Grabbing data from JSON files and returning it in the form of arrays
  $submitButton.on('click', userSong(songList))

  function userSong (songList){
      console.log("button clicked!")
      console.log(songList)
      songList.songs.push({"songTitle": $songTitle, "artist": $artist, "album": $album, "genre": $genre})
      console.log("after push", songList)
      // $("#songContainer").html("")
      // // $songForm.find('input').val("")
      // App.insertSongs(songList)
      // App.goHome()
  }
  app.insertSongs = function (songList) {
      var rendered = Mustache.to_html($template, songList);
      $target.html(rendered);
  }
  console.log("inside show page", app)
  //cache DOM elements
  var $navBarElements = $('.navBar li')
  var $addMusic = $navBarElements.find("#addMusic")
  var $listMusic = $navBarElements.find("#listMusic")

  //Bind events
  $navBarElements.on('click', hidePages)

  //private function
  function hidePages (e){
    $('.page').addClass("hidden")
    app.showPage(e.target.hash);
  }

   app.goHome = function(){
      $('#listMusicView').removeClass("hidden")
      $('#addMusicView').addClass("hidden")
      $listMusic.addClass("selected")
      $addMusic.removeClass("selected")
  }

  app.showPage = function(id){
    if(id) {
      console.log("inside if", id)
      $(`${id}`).removeClass("hidden");
      $addMusic.addClass("selected")
      $listMusic.removeClass("selected")
    } else {
      console.log("inside else", id)
      App.goHome()
    }
  }

  return app;
})(App || {})
