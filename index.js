const DOMSelectors = {
  form: document.getElementById("form"),
  nameInput: document.getElementById("name-input"),
  yearInput: document.getElementById("year-input"),
  schoolInput: document.getElementById("school-input"),
  osisInput: document.getElementById("osis-input"),
  card: document.getElementById("card"),
};

function IDcreator() {
  h1 = DOMSelectors.nameInput.value;
  h2 = DOMSelectors.yearInput.value;
  h3 = DOMSelectors.schoolInput.value;
  p = DOMSelectors.osisInput.value;
  DOMSelectors.schoolInput.value;
  DOMSelectors.card.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
         <h1>${h1}</h1>
          <h2>${h2}</h2>
          <h3>${h3}</h3>
           <p>${p}</p>
           <br>
          <button class="remove-button">Remove</button>
  </div>`
  );
}

function reset() {
  DOMSelectors.nameInput.value = ``;
  DOMSelectors.yearInput.value = ``;
  DOMSelectors.schoolInput.value = ``;
  DOMSelectors.osisInput.value = ``;
}

function remove() {
  const buttons = Array.from(document.getElementsByClassName("remove-button"));
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

DOMSelectors.form.addEventListener("submit", function () {
  IDcreator();
  event.preventDefault();
  remove();
  reset();
});
