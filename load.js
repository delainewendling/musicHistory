var App = (function (app) {

  var $template = $("#songTemplate").html()
  var $target = $("#songContainer")
  //Grabbing data from JSON files and returning it in the form of arrays
  app.loadSongs = function () {
    return $.getJSON("songInfo.json")
    .then(function (res) {
      return res;
    })
  },
  app.loadMoreSongs = function () {
    return $.getJSON('moreSongs.json')
    .then(function(res){
      return res;
    })
  },
  app.insertSongs = function (songList) {
      var rendered = Mustache.to_html($template, songList);
      $target.html(rendered);
  },
  app.showPage = function(id){
    if(id) {
      console.log("inside if", id)
      $(`${id}`).removeClass("hidden");
      $('#addMusic').addClass("selected")
      $("#listMusic").removeClass("selected")
    } else {
      console.log("inside else", id)
      $("#listMusicView").removeClass("hidden")
      $("#listMusic").addClass("selected")
      $("#addMusic").removeClass("selected")
      }
    }
    app.userSong = function(songList){
      console.log(songList)
      var songTitle = $("#songName").val()
      var artist = $("#artist").val()
      var album = $("#album").val()
      var genre = $("#genre").val()
      songList.push({"songTitle": songTitle, "artist": artist, "album": album, "genre": genre})
      $("#songContainer").html=""
      App.insertSongs(songList, "firstSongs")
    }
  return app
})(App || {})

