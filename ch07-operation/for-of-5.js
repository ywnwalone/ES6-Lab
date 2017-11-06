let values = [10, 20, 30];
Array.prototype.music = function(){
  return "MUSIC";
};

Object.prototype.sports = function(){
  return "SPORTS";
};

for(var key in values){
  console.log(key, values[key]);
};

console.log("<<<for-of>>>");
for(var value of values){
  console.log(value);
}
