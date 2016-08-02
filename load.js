var App = (function (app) {
  app.loadSongs = function () {
    return $.getJSON("song-info.json")
    .then(function (res) {
      return res.songs;
    })
  }

  return app
})(App || {})





$(document).ready(function(){
  // console.log(":)", $.getJSON)
})

// var jqxhr = $.getJSON( "example.json", function() {
//   console.log( "success" );
// })
//   .always(function() {
//     console.log( "complete" );
//   });