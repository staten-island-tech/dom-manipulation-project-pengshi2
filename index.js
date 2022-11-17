const DOMselectors = {
  name: document.querySelector(".name"),
  age: document.getElementById(".age"),
  grade: document.getElementById(".grade"),
  height: document.getElementById(".height"),
  average: document.getElementById(".average"),
  reset: document.getElementById("reset"),
};

let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

console.log(randomColor);

const button = document.getElementById("submit");
button.addEventListener("click", () => {
  {
    let boxInput = document.getElementById("task").value;
    let listItem = document.createElement("li");
    let text = document.createTextNode(boxInput);
    listItem.appendChild(text);
  }
  let list = document.getElementById("list");
  list.appendChild(listItem);
});

function color() {
  let element = document.getElementById("myDiv");
  element.style.backgroundColor = randomColor;
}
document.getElementById("myDiv").onclick = color();

const deleteButtons = document.querySelectorAll(".del");

deleteButtons.forEach((button) => {
  button.addEventListener("click", removeMe);
});

function removeMe() {
  this.closest("li").remove();
}
