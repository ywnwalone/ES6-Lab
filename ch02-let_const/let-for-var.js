var nodes = document.querySelector("ul");
for(let k = 0; k < nodes.children.length; k++){
  var el = nodes.children[k];
  el.onclick = function(e){
    e.target.style.backgroundColor = "yellow";
    console.log(k);
  }
};
