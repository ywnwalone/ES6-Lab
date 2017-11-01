"use strict";
var sports = "SOCCER";
let music = "JAZZ";

function get(){
  var sports = "BASKETBALL";
  let music = "CLASSIC";
  console.log("1: ",sports);
  console.log("2: ",this.sports);
  console.log("3: ",this.music);
};
window.get();
get();
