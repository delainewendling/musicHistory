$(document).ready(function(){

  App.loadSongs().then(function(songList){
    console.log("loaded")

    songList.forEach(function(song){
      $('#songContainer').append(`<div class="song">
        <h2> ${song.songTitle} </h2>
        <span class="songStats"> ${song.artist} | </span>
        <span class="songStats"> ${song.album} | </span>
        <span class="songStats"> ${song.genre} </span>
      <button class="deleteBtn"> Delete </button>
      </div>`);
    })
  })
  .then(function() {
    $('#songContainer').append("<button class='more'> More > </button>");
  })
  .then(function(){
    $('.deleteBtn').click((e)=>{
      console.log(e.target.parentElement)
      $(e.target.parentElement).remove()
      // console.log(e.parentElement)
    })
  })
  .fail(function() {
    console.log( "error" );
  })

})



// var nav = document.querySelectorAll(".navBar li");
// // console.log(nav)
// var pages = document.querySelectorAll(".page");
// for (let i=0; i<nav.length; i++) {
//   nav[i].addEventListener("click", (e) => {
//     //This for loop will add the class of hidden to all of the elements with the class page.
//     for (let j=0; j<pages.length; j++) { //Need new variable if this is inside the function above. If not, this can be i again.
//       pages[j].classList.add("hidden");
//     }
//     showPage(e.target.hash);
//   })
// }

// function showPage (id) {
//   if (id) { //empty string is falsey so if hash is empty it will be false, otherwise it will be true
//       document.querySelector(id).classList.remove("hidden");
//       document.getElementById("addMusic").classList.add("selected")
//       document.getElementById("listMusic").classList.remove("selected")
//     } else {
//       document.querySelector("#listMusicView").classList.remove("hidden");
//       document.getElementById("listMusic").classList.add("selected")
//       document.getElementById("addMusic").classList.remove("selected")
//     }
// }



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
//   // removeChar.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""));
// }
// console.log(removeChar)

// var finalArray = [];
// for(i=0; i<removeChar.length; i++) {
//   finalArray.push(removeChar[i].replace(">", "-"))
//   songContainer.innerHTML +=
//     `<p> ${finalArray[i]} </p>`
// }




