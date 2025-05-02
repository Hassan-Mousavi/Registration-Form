const formInput = document.querySelectorAll(".form_input");
const userInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const btnSubmit = document.querySelector(".btn_submit");
const formIcons = document.querySelectorAll(".form_icon");
const correctIcon = document.querySelectorAll(".correct");
const falseIcon = document.querySelectorAll(".false");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  let isValid = true;

  formInput.forEach((input) => {
    const correctIcon = input.nextElementSibling;
    const falseIcon = correctIcon.nextElementSibling;

    if (input.value.trim() !== "") {
      input.style.borderColor = "green";
      correctIcon.style.display = "block";
      falseIcon.style.display = "none";
    } else {
      input.style.borderColor = "red";
      correctIcon.style.display = "none";
      falseIcon.style.display = "block";
      isValid = false;
    }
  });

  const jarvis_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!jarvis_pattern.test(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  if (isValid) {
    console.log("Form is valid and ready to submit!");
  }
});

// const showBorder = function () {
//   formInput.forEach((e, i) => {
//     if (e.value === "") {
//       e.style.borderColor = "red";
//     } else {
//       e.style.borderColor = "green";
//     }
//   });
// };

// console.dir(formInput);

// const correctIcons = function () {
//   formInput.forEach((e, i) => {
//     if (e.value !== "") {
//       e.nextElementSibling.style.display = "block";
//     } else {
//       e.nextElementSibling.style.display = "none";
//     }
//     console.log(e);
//   });
// };
// const falseIcons = function () {
//   formInput.forEach((e, i) => {
//     if (e.value === "") {
//       // e.style.display = "block";
//       e.nextElementSibling.style.display = "block";
//     } else {
//       // e.style.display = "none";
//       e.nextElementSibling.style.display = "none";
//     }
//     console.log(e);
//   });
// };

// // submit btn
// btnSubmit.addEventListener("click", function (e) {
//   e.preventDefault();
//   showBorder();
//   correctIcons();
//   falseIcons();
//   // userName();
// });
