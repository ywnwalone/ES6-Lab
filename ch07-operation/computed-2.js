let item = "tennis";
let sports = {
  [item]: 1,
  [item+"Game"]: "Wimbledon",
  [item+"Method"](){
    return this[item];
  }
};
console.log(sports.tennis);
console.log(sports.tennisGame);
console.log(sports.tennisMethod());
