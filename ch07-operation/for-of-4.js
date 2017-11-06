let values = [
  {item: "Present1", amount: {apple: 10, candy: 20}},
  {item: "Present2", amount: {apple: 30, candy: 40}}
];
for(var {item: one, amount: {apple: two, candy: five}} of values){
  console.log(one, two, five);
}
