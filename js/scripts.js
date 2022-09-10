//Utility Logic:




//Business Logic:

const numStringArray = [0, 'beep', 'boop', "won't you be my neightbor?", 4, 5];
numStringArray.forEach(function(numberBeep) {
  if (numStringArray.toString(1) === 'beep') {
    return 'beep';
  } else if (numStringArray.toString(2) === 'boop') {
    return 'boop';
  } else if (numStringArray.toString(3) === "won't you be my neighbor?") {
    return "won't you be my neightbor?";
  }
});



//User Interface Logic:

function resetFormInput() {
  document.getElementById("numberInput").value = null;
}


window.addEventListener("load", function() {
  const form = document.querySelector("form");
  const resetBtn = document.querySelector("button#reset");
})

  form.addEventListener("submit", function(e) {
    const numberInput = document.getElementById("numberInput").value;

    e.preventDefault();
  })