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

const button = document.getElementById("submit");
button.addEventListener("click", () => {
  {
    let listItem = document.createElement("p");
    listItem.appendChild(text);
  }
  let list = document.getElementById("li");
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

function reset() {
  DOMselectors.nameInput.value = "";
  DOMselectors.gradeInput.value = "";
  DOMselectors.schoolInput.value = "";
}
