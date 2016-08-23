"use strict";
$(document).ready(()=>{
var DOMInteraction = require('./DOMHandler.js'),
    controller = require('./controller.js'),
    database = require('./dbInteraction.js'),
    template = require('./template.js'),
    filter = require('./filter.js');

 //Loads songs to the page  upon load
  database.getSongs()
  .then((data)=>{
    console.log("Hello, I'm running", data);
    template(data);
  });
});