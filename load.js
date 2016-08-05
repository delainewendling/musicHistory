var App = (function (app) {
  console.log("methods", app)
  var songs = [];
  var moreSongs = [];

  app.loadSongs = function () {
    return $.getJSON("songInfo.json")
    .then(function (res) {
      return res;
    })
  }

  app.loadMoreSongs = function () {
    return $.getJSON('moreSongs.json')
    .then(function(res){
      return res;
    })
  }


  return app
})(App || {})

