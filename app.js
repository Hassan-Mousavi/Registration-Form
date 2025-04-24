const formInput = document.querySelectorAll(".form_input");
const userInput = document.querySelector(".username_input");
const emailInput = document.querySelector(".email_input");
const btnSubmit = document.querySelector(".btn_submit");
const formIcons = document.querySelectorAll(".form_icon");
const correctIcon = document.querySelector(".correct");
const falseIcon = document.querySelector(".false");
// userName
const validation = function () {
  formInput.forEach((i) => {
    if (i.textContent === "") {
      falseIcon.style.display = "block";
      correctIcon.style.display = "none";
    } else {
      correctIcon.style.display = "block";
      falseIcon.style.display = "none";
    }
  });
};

const userName = function () {
  if (userInput.value === "") {
    userInput.style.borderColor = "red";
    // falseIcon.style.display = "block";
    // correctIcon.style.display = "none";
  } else {
    userInput.style.borderColor = "green";
    // correctIcon.style.display = "block";
    // falseIcon.style.display = "none";
  }
};

const userEmail = function () {
  if (emailInput.value === "") {
    emailInput.style.borderColor = "red";
  } else {
    emailInput.style.borderColor = "green";
  }
};

// submit btn
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  validation();
  userName();
  userEmail();
});
