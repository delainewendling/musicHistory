var App = (function(app){
  //cache variables for DOM printout
  var $target = $("#songContainer")
  var $template = $target.find("#songTemplate").html()
  //cache variables for form
  var $songForm = $(".addSongs")
  var $submitButton = $songForm.find("#submit");
  //cache variables for navigation
  var $navBarElements = $('.navBar li')
  var $addMusic = $navBarElements.find("#addMusic")
  var $listMusic = $navBarElements.find("#listMusic")

  //Bind events
  $navBarElements.on('click', hidePages)
  $submitButton.on('click', addSong)

  function addSong (){
      var $songTitle = $songForm.find("#songName").val()
      var $artist = $songForm.find("#artist").val()
      var $album= $songForm.find("#album").val()
      var $genre = $songForm.find("#genre").val()
      app.getSongs().push({"songTitle": $songTitle, "artist": $artist, "album": $album, "genre": $genre})
      $target.html("")
      $('input').val("")
      App.insertSongs()
      App.goHome()
  }

  //private function
  function hidePages (e){
    $('.page').addClass("hidden")
    app.showPage(e.target.hash);
  }

  app.insertSongs = function () {
      var rendered = Mustache.to_html($template, app.getResult());
      $target.html(rendered);
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
