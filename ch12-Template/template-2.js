let one = 1, two = 2;

function tagFunction(text, value){
  console.log(text[0]);
  console.log(value);
  console.log(text[1]);
  console.log(typeof text[1]);
}
tagFunction `1+2=${one + two}`;
