//Utility Logic:




//Business Logic:

const numStringArray = [0, 'beep', 'boop', "won't you be my neighbor?", 4, 5];
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

function hideResults() {
  document.querySelector('div#result').setAttribute('class', 'hidden');
}

function resetFormInput() {
  document.getElementById('numberInput').value = null;
}


window.addEventListener('load', function() {
  const form = document.querySelector("form");
  const resetBtn = document.querySelector("button#reset");
  const result = document.querySelector('div#result');

  resetBtn.addEventListener('click', function() {
    hideResults();
    resetFormInput();
  })


  form.addEventListener('submit', function(e) {
    const numberInput = document.getElementById('numberInput').value;

    document.querySelector('div#result').removeAttribute('class');
    document.getElementById('numberInput').innerText = numberInput.toString();

    result.removeAttribute('class');

    e.preventDefault();
  })
})