const DOMselectors = {
  form: document.getElementById("form"),
  name: document.getElementById(".name"),
  grade: document.getElementById(".grade"),
  school: document.getElementById("school"),
  reset: document.getElementById("reset"),
  input: document.getElementById("input"),
  button: document.getElementById("btn"),
  things: document.getElementById("things"),
};

const button = document.getElementById("insert");
button.addEventListener("click", () => {
  {
    let listItem = document.createElement("li");
    listItem.appendChild(p);
  }
  let list = document.getElementById("list");
  list.appendChild(listItem);
});

const deleteButtons = document.querySelectorAll(".del");

deleteButtons.forEach((button) => {
  button.addEventListener("click", removeMe);
});

function removeMe() {
  this.closest("li").remove();
}

DOMselectors.form.addEventListener("submit", function () {
  createElement();
  resetInputs();
});
function elementGenerator() {
  addEventListener("submit");
  h1 = DOMselectors.name.value;
  h2 = DOMselectors.grade.value;
  p = DOMselectors.school.value;
  DOMselectors.objects.insertAdjacentHTML(
    "afterend",
    `<div class="object">
         <h1>${h1} </h1>          
          <h2>${h2}</h2>
           <p>${p}</p>
          <br>
          <button class="remove-button">Remove</button>
  </div>`
  );
}

function setDeleteButtons() {
  const buttons = Array.from(document.getElementsByClassName("remove-button"));
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

DOMselectors.button.addEventListener("click", function () {
  let input = DOMselectors.input.value;
  DOMselectors.form.insertAdjacentHTML("afterend", `<p> ${input} </p>`);
});

document.getElementById(insert).onClick = reset();
function reset() {
  DOMselectors.name.value = ``;
  DOMselectors.grade.value = ``;
  DOMselectors.school.value = ``;
}
