function total({one, plus: {two, five}}){
  console.log(one + two + five);
}
total({one: 1, plus: {two: 2, five: 5}});
total({one: "1", plus: {two: "2", five: "5"}})
