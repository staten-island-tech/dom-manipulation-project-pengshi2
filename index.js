const domSelectors = {
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
  reset: document.getElementById("btn"),
};
const allPeople = document.querySelectorAll(".person");
console.log(allPeople);

let image = document.theform.bg.value;

function myFunction() {
  document.body.style.backgroundColor = "red";
}

function theFunction() {
  document.getElementById("myDiv").style.backgroundImage = "url('1999.jpg')";
}

function fun() {
  document.getElementById("myForm").reset();
}
