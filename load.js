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
  app.insertSongs = function (songList, className, button) {
      return songList.forEach(function(song){
       $('#songContainer').append(`<div class="${className}">
          <h2> ${song.songTitle} </h2>
          <span class="songStats"> ${song.artist} | </span>
          <span class="songStats"> ${song.album} | </span>
          <span class="songStats"> ${song.genre} </span>
        <button class="${button} deleteBtn"> Delete </button>
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
  return app
})(App || {})

