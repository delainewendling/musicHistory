"use strict";
$(document).ready(()=>{
var getSongs = require('./load.js'),
    DOMInteraction = require('./DOMHandler.js'),
    controller = require('./controller.js'),
    filter = require('./filter.js');

 //Loads songs to the page  upon load
  getSongs.loadjonBellion()
  .then((data)=>{
    console.log("Hello, I'm running");
    controller(data);
  });
});