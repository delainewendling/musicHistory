$(document).ready(function(){

  App.loadSongs().then(function(songList){
    console.log(songList)
    app.insertSongs(songList, "firstSongs")
  })
  .then(function() {
    $('#songContainer').append("<button class='more songButton'> More > </button>");
  })
  .then(function(){
    $('.more').click((e)=>{
      App.loadMoreSongs()
      .then(function(moreSongs){
        moreSongs.forEach(function(song){
           $('#songContainer').append(`<div class="song">
        <h2> ${song.songTitle} </h2>
        <span class="songStats"> ${song.artist} | </span>
        <span class="songStats"> ${song.album} | </span>
        <span class="songStats"> ${song.genre} </span>
      <button class="deleteBtn"> Delete </button>
      </div>`)
        })
      $('.more').hide()
      $('#songContainer').append("<button class='less songButton'> < Less </button>");
      })
    })
  })
  // .then(function(){
  //   $('.less').click((e)=>{

  //   })
  // })
  .then(function(){
    $('.deleteBtn').click((e)=>{
      console.log(e.target.parentElement)
      $(e.target.parentElement).remove()
      // console.log(e.parentElement)
    })
  })
  .then(function(){
    $('.navBar li').click((e)=>{
      console.log(e.target.hash)
      $('.page').addClass("hidden")
        App.showPage(e.target.hash);
    })
  })
  .fail(function() {
    console.log( "error" );
  })
})




// <h2> Smooth </h2>
//       <ul class="songStats">
//         <li> FGL | </li>
//         <li> Dig Your Roots | </li>
//         <li> Country </li>
//       </ul>

// var songContainer = document.getElementById("songContainer");

// var songs = [];

// songs[songs.length] = "Maybe IDK > by Jon !Bellion on the album The Human Condition";
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs[songs.length] = "Magic > by Coldplay^ on the album Ghost Stories";

// var removeChar = []
// for(i=0; i<songs.length; i++) {
//   console.log(songs[i]);
//   removeChar.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""));
// }
// console.log(removeChar)

// var finalArray = [];
// for(i=0; i<removeChar.length; i++) {
//   finalArray.push(removeChar[i].replace(">", "-"))
//   songContainer.innerHTML +=
//     `<p> ${finalArray[i]} </p>`
// }




