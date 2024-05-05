const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const progress_checker_container = document.getElementById("progress-checker-container");
const first_previousbtn = document.querySelector(".first_previousbtn");
const second_previousbtn = document.querySelector(".second_previousbtn");
const first_nextbtn = document.querySelector(".first_nextbtn");
const second_nextbtn = document.querySelector(".second_nextbtn");
const submitbtn = document.querySelector(".submitbtn");

// ======================== change the form's as per the user's clicked event by the previous next btns ========================
first_nextbtn.onclick = function () {
  form1.style.left = "-450px";
  form2.style.left = "5px";
};

second_nextbtn.onclick = function () {
  form2.style.left = "-451px";
  form3.style.left = "5px";
};

first_previousbtn.onclick = function () {
  form1.style.left = "5px";
  form2.style.left = "450px";
};

second_previousbtn.onclick = function () {
  form2.style.left = "5px";
  form3.style.left = "450px";
};
