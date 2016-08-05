var App = (function (app) {

  var $target = $("#songContainer")
  var $template = $target.find("#songTemplate").html()
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
  }
  return app
})(App || {})

