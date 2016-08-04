$(document).ready(function(){

  App.loadSongs().then(function(songList){
    console.log(songList)
    App.insertSongs(songList, "firstSongs")
  })
  .catch(function() {
    console.log( "error" );
  })
  .then(function() {
    $('#songContainer').append("<button class='more songButton'> More > </button>");
  })
  .then(function(){
    $('.more').click((e)=>{
      App.loadMoreSongs()
      .then(function(moreSongs){
        App.insertSongs(moreSongs, "secondSongs")
          $('.more').hide()
          $('#songContainer').append("<button class='less songButton'> < Less </button>");
          console.log("less button created")
      })
    })
  })
  .then(function(){
    $('#songContainer').on('click', '.less', (e)=>{
      $('.secondSongs').remove()
      $('.less').hide()
      $('.more').show()
    })
  })
  .then(function(){
    $('#songContainer').on('click', '.deleteBtn', (e)=>{
      console.log(e.target.parentElement)
      $(e.target.parentElement).remove()
    })
  })
  .then(function(){
    $('.navBar li').click((e)=>{
      $('.page').addClass("hidden")
        App.showPage(e.target.hash);
    })
  })
  .then(function(){
    $("#submit").click((e)=>{

    })
  })
})



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




