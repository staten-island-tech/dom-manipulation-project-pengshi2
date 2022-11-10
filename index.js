const domSelectors = {
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
}

// function randomColor() {
//   let randomize = Math.floor(Math.random() * 16777215).toString(16);
//   return randomize;
// }

// console.log(randomColor());

// const body = document.body;
// const pallete = document.getElementById("pallete");
// const pallete2 = document.getElementById("pallete2");
// const pallete3 = document.getElementById("pallete3");

// //Random Color
// function randomColor() {
//   let randomize = Math.floor(Math.random() * 16777215).toString(16);
//   let randomize2 = Math.floor(Math.random() * 16777215).toString(16);
//   let randomize3 = Math.floor(Math.random() * 16777215).toString(16);
//   pallete.innerHTML = `#${randomize}`;
//   pallete2.innerHTML = `#${randomize}`;
//   pallete3.innerHTML = `#${randomize}`;
//   body.style.background = `linear-gradient(to right, #${randomize} 0%, #${randomize} 33%, #${randomize2} 33%, #${randomize2} 67%, #${randomize3} 67%, #${randomize3} 100%)`;
// }
// // Copy Color
// const color = document.querySelectorAll(".color");
// color.forEach((el) => {
//   el.addEventListener("click", copyHex);
// });

// function selectArea() {
//   let element = event.target;
//   let range;
//   if (document.selection) {
//     range = document.body.creteTextRange();
//     range.moveToElementText(element);
//     range.select();
//   } else if (window.getSelection) {
//     range = document.createRange();
//     range.selectNode(element);

//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange(range);
//   }
// }

// function copyHex() {
//   selectArea();
//   alert(`Color code ${event.target.innerText} copied in clipboard`);
//   document.execCommand("copy");
// }
