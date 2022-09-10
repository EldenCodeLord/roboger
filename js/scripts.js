//Utility Logic:




//Business Logic:

const numStringArray = [0, 'beep', 'boop', "won't you be my neightbor?", 4, 5];
numStringArray.forEach(function(numberBeep) {
  if (numStringArray.toString(1) === 'beep') {
    return 'beep';
  } else if (numStringArray.toString(2) === 'boop') {
    return 'boop';
  } else if (numStringArray.toString(3) === "won't you be my neightbor?") {
    return "won't you be my neightbor?";
  }
});



//User Interface Logic: