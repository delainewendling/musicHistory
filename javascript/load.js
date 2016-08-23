"use strict";

let jonBellion = {};
let fgl = {};
let coldplay = {};
let laurenDaigle = {};
let hillsong = {};

function loadjonBellion (){
  return new Promise(function (resolve, reject){
    $.getJSON('JSON/jonBellion.json')
       .then((res) => {
        jonBellion = res;
        resolve(jonBellion);
    });
  });
}

function loadFGL (){
  return new Promise(function (resolve, reject){
    $.getJSON('JSON/fgl.json')
       .then((res) => {
        fgl = res;
        resolve(fgl);
    });
  });
}

function loadcoldplay (){
  return new Promise(function (resolve, reject){
    $.getJSON('JSON/coldplay.json')
       .then((res) => {
        coldplay = res;
        resolve(coldplay);
    });
  });
}

function loadlaurenDaigle (){
  return new Promise(function (resolve, reject){
    $.getJSON('JSON/laurenDaigle.json')
       .then((res) => {
        laurenDaigle = res;
        resolve(laurenDaigle);
    });
  });
}

function loadhillsong (){
  return new Promise(function (resolve, reject){
    $.getJSON('JSON/hillsong.json')
       .then((res) => {
        hillsong = res;
        resolve(hillsong);
    });
  });
}

module.exports = {loadjonBellion, loadFGL, loadcoldplay, loadlaurenDaigle, loadhillsong};


