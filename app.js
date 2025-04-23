const formInput = document.querySelectorAll(".form_input");
const userInput = document.querySelector(".username_input");
const btnSubmit = document.querySelector(".btn_submit");
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (!userInput) {
    userInput.style.borderColor = "red";
  } else {
    userInput.style.borderColor = "green";
  }
});
