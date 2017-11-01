//"use strict";
one = 100;
function get(){
  one = 300;
  console.log("Function : ", one);
}
get();
console.log("Global : ", one);
