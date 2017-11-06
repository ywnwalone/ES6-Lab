let sports = {
  soccer: "SOCCER",
  baseball: "BASEBALL"
};

let keyList = Object.keys(sports);
for(var key of keyList){
  console.log(key, sports[key]);
}
