var App = (function (app) {

  app.loadSongs = function () {
    return $.getJSON("songInfo.json")
    .then(function (res) {
      return res.songs;
    })
  },
  app.loadMoreSongs = function () {
    return $.getJSON('moreSongs.json')
    .then(function(res){
      return res.songs;
    })
  },
  app.insertSongs = function (songList, className) {
      songList.forEach(function(song, index){
       $('#songContainer').append(`<div class="${className}">
          <h2> ${song.songTitle} </h2>
          <span class="songStats"> ${song.artist} | </span>
          <span class="songStats"> ${song.album} | </span>
          <span class="songStats"> ${song.genre} </span>
        <button class="deleteBtn"> Delete </button>
        </div>`)
     })
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

