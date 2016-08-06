var App = (function (app) {

  var result = {};
  var songs = [];
  var moreSongs = [];

  var firstPromise = $.getJSON("songInfo.json");
  var secondPromise = $.getJSON("moreSongs.json");

  //Grabbing the data 
  app.loadSongs = function(){
    $.when(firstPromise, secondPromise)
      .done(function(firstData, secondData) {
        console.log("data loaded")
        result = firstData[0];
        songs = firstData[0].songs;
        moreSongs = secondData[0].songs;
        console.log("result", firstData)
        console.log("songs", songs)
        console.log("more songs", moreSongs)
    });
  }

  app.getResult = function(){
    return result
  }

  app.getSongs = function(){
    return songs
  }

  app.getMoreSongs = function(){
    return moreSongs
  }


  // app.loadSongs = function () {
  //   $.getJSON("songInfo.json")
  //   .then((res) => {
  //     return songs = res.songs})
  //   .then($.getJSON("moreSongs.json"))
  //   .then((res) => {
  //     return moreSongs = res.songs
  //   })
  // }

 // app.loadMoreSongs = function () {
  //   return $.getJSON('moreSongs.json')
  //   .then(function(res){
  //     return res;
  //   })
  // }
  return app
})(App || {})

