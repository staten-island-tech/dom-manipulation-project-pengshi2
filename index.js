const DOMselectors = {
  submit: document.querySelector(".btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
  reset: document.getElementById("btn"),
};

function fun() {
  document.getElementById("myForm").reset();
}
let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

console.log(randomColor);

function color() {
  let element = document.getElementById("myDiv");
  element.style.backgroundColor = randomColor;
}

document.getElementById("myDiv").onclick = color();

let randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

document.theform.box = randomColor;

document.removeChild();
