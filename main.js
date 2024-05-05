const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const progress_indication_line = document.getElementById("progress-indication-line");
const first_previousbtn = document.querySelector(".first_previousbtn");
const second_previousbtn = document.querySelector(".second_previousbtn");
const first_nextbtn = document.querySelector(".first_nextbtn");
const second_nextbtn = document.querySelector(".second_nextbtn");
const submitbtn = document.querySelector(".submitbtn");
const input_name = document.querySelector("input[name='name']");

function isform_valid(form) {
  const all_inputfields = form.querySelectorAll(".inputfields");
  let is_valid = true;
  all_inputfields.forEach((each_inputfield)=>{
    if(each_inputfield.value.trim() === "") {
      is_valid = false;
      each_inputfield.classList.add("formerror");
      console.log("form not valid");
    }
    else {
      is_valid = true;
      each_inputfield.classList.remove("formerror");
      console.log("form is valid");
    }
  })
  return is_valid;
}

// ============================ function to update the width of progress indication line ============================
function update_progress_indicationline_width(width_percentage) {
  progress_indication_line.style.width = `calc(100% - ${width_percentage})`;
}

// ======================== if the input fields' values are not empty then change the form's as per the user's clicked event by the previous next btns otherwise stuck at the same form ========================
first_nextbtn.onclick = function () {
  if(isform_valid(form1)) {
    form1.style.left = "-450px";
    form2.style.left = "5px";
    update_progress_indicationline_width("33%");
  }
};

second_nextbtn.onclick = function () {
  if(isform_valid(form2)) {
    form2.style.left = "-451px";
    form3.style.left = "5px";
    update_progress_indicationline_width("0%");
  }
};

first_previousbtn.onclick = function () {
  form1.style.left = "5px";
  form2.style.left = "450px";
  update_progress_indicationline_width("66%");
};

second_previousbtn.onclick = function () {
  form2.style.left = "5px";
  form3.style.left = "450px";
  update_progress_indicationline_width("33%");
};

submitbtn.onclick = function(e) {
  if(isform_valid(form3)) {
    alert(`thank you for contacting us knull will reach out to you soon ${input_name.value}`);
  }
}