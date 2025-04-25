const formInput = document.querySelectorAll(".form_input");
const userInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const btnSubmit = document.querySelector(".btn_submit");
const formIcons = document.querySelectorAll(".form_icon");
const correctIcon = document.querySelectorAll(".correct");
const falseIcon = document.querySelectorAll(".false");

const showBorder = function () {
  formInput.forEach((e, i) => {
    if (e.value === "") {
      e.style.borderColor = "red";
    } else {
      e.style.borderColor = "green";
    }
    console.log(e);
  });
};
const correctIcons = function () {
  correctIcon.forEach((e, i) => {
    if (formInput.value !== "") {
      e.style.display = "block";
    } else {
      e.style.display = "none ";
    }
    console.log(e);
  });
};
const falseIcons = function () {
  falseIcon.forEach((e, i) => {
    if (formInput.value === "") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
    console.log(e);
  });
};

// submit btn
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  showBorder();
  correctIcons();
  falseIcons();
  // userName();
});
