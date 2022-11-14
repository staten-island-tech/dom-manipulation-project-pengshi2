const DOMselectors = {
  submit: document.querySelector(".btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
  reset: document.getElementById("btn"),
};
const allPeople = document.querySelectorAll(".person");
console.log(allPeople);

function myFunction() {
  document.body.style.backgroundColor = "red";
}

function theFunction() {
  document.getElementById("myDiv").style.backgroundImage = "url('1999.jpg')";
}

function fun() {
  document.getElementById("myForm").reset();
}

let title = document.theform.title.value;
console.log(document.theform.title.value);

let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

console.log(randomColor);

function color() {
  let element = document.getElementById("myDiv");
  element.style.backgroundColor = randomColor;
  String.Repeat();
}
