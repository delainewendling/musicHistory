var App = (function(app){
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

  app.showPage = function(id){
    if(id) {
      console.log("inside if", id)
      $(`${id}`).removeClass("hidden");
      $addMusic.addClass("selected")
      $listMusic.removeClass("selected")
    } else {
      console.log("inside else", id)
      $('#listMusicView').removeClass("hidden")
      $listMusic.addClass("selected")
      $addMusic.removeClass("selected")
      }
    }

  return app;
})(App || {})

    // app.userSong = function(songList){
    //   console.log(songList)
    //   var songTitle = $("#songName").val()
    //   var artist = $("#artist").val()
    //   var album = $("#album").val()
    //   var genre = $("#genre").val()
    //   songList.push({"songTitle": songTitle, "artist": artist, "album": album, "genre": genre})
    //   $("#songContainer").html=""
    //   App.insertSongs(songList, "firstSongs")
    // }