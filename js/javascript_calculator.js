/*********************
To-Do:
-Fix Calculation steps
-Add Decimal calculations
-Add CE functionality
-Improve Styling
*********************/


/*********************
Variable Definitions
*********************/

var currentAns = 0;
var previousAns = 0;

var numberArr = [];
var operatorArr = [];
var fixedNumberArr = [];

var numberRegex = /[0-9]/;
var operatorRegex = /(x|\+|\/|\-)/;

var numberBool = true;
var operatorBool = false;

/*********************
Document Ready
*********************/


$(document).ready(function() {

  hardReset();

  //Key listener
  $(window).keypress(function(e) {
    keyboardListener(e.charCode);
  });

  $(":button").on("click", function() {

    var buttonPressed = $(this).text();

    // If the button pressed is a number:
    if (numberRegex.test(buttonPressed)) {
      numberBool = true;
      operatorBool = false;
      numberArr.push(buttonPressed);
      fixedNumberArr = updateNumberArr();
      updateFormula()
      $("#answer-p").text(fixedNumberArr[fixedNumberArr.length - 1]);
    }

    // If the button pressed is ".":
    if (buttonPressed == ".") {
      operatorBool = false;
      numberArr.push(".");
      fixedNumberarr = updateNumberArr();
      updateFormula();
    }

    // If the button pressed is an operator:
    else if (operatorRegex.test(buttonPressed)) {
      // Check if very first button pressed is an operator
      if (fixedNumberArr.length === 0 && operatorBool == false) {
        numberArr.push("0");
        numberArr.push('~');
        fixedNumberArr = updateNumberArr();
        operatorArr.push(buttonPressed);
        $("#answer-p").text(buttonPressed);
        updateFormula()
      }
      // If the last button pressed was an operator, overwrite that operator
      else if (!numberBool) {
        operatorArr[operatorArr.length - 1] = buttonPressed;
        $("#answer-p").text(buttonPressed);
        updateFormula()
      }
      else {
        // Use previous answer in next calculation if first button is an operator
        if (operatorBool) {
          numberArr.push(previousAns);
          fixedNumberArr = updateNumberArr();
        }
        numberArr.push('~');
        operatorArr.push(buttonPressed);
        $("#answer-p").text(buttonPressed);
        updateFormula()
      }
      numberBool = false;
    }

    // If the button pressed is the equals button:
    else if (buttonPressed == "=") {
      if (operatorArr.length === numberArr.length) {
        operatorArr.pop();
      }
      currentAns = performCalc(fixedNumberArr, operatorArr);
      $("#answer-p").text(currentAns);
      previousAns = currentAns;
      softReset();
      operatorBool = true;
    }

    // If the button pressed is the AC button:
    else if (buttonPressed == "AC") {
      if (numberBool) {
        fixedNumberArr.pop();
        numberBool = false;
        updateFormula();
        numberArr = [];
        for (var i = 0; i < fixedNumberArr.length; i++) {
          numberArr.push(fixedNumberArr[i], "~");
        }
      }
    }

    // If the button pressed is the CE button:
    else if (buttonPressed == "CE") {
      hardReset();
    }
  });

});

/*********************
Supplemental Functions
*********************/

// Reset key variables and update the formula and answer p's to 0
function hardReset() {
  currentAns = 0;
  operatorArr = [];
  numberArr = [];
  fixedNumberArr = [];
  $("#answer-p").text(currentAns);
  $('#formula-p').text(currentAns);
}

//Reset key variables but don't update the forumal and answer p's
function softReset() {
  currentAns = 0;
  operatorArr = [];
  numberArr = [];
  fixedNumberArr = [];
}

//Turn number array into fixed number array
function updateNumberArr() {
  var tempStr = numberArr.join('');
  var tempArr = tempStr.split('~');
  return tempArr;
}

//Update the forumla p
function updateFormula() {
  var outputStr = "";
  for (var i = 0; i < fixedNumberArr.length; i++) {
    if (i <= operatorArr.length - 1) {
      outputStr += fixedNumberArr[i] + " " + operatorArr[i] + " ";
    }
    else {
      outputStr += fixedNumberArr[i];
    }

  }
  $("#formula-p").text(outputStr);
}

//Perform the calculation given a fixed number array and an operator array
function performCalc(numArr, operArr) {

  for (var i = 0; i < numArr.length; i++) {
    numArr[i] = parseFloat(numArr[i]);
  }

  while (operArr.length > 0) {
    for (var i = 0; i < operArr.length; i++) {
      if (operArr[i] == "/") {
        tempAns = numArr[i] / numArr[i + 1];
        numArr.splice(i,2, tempAns);
        operArr.splice(i,1);
        i--;
      }
    }
    for (var i = 0; i < operArr.length; i++) {
      if (operArr[i] == "x") {
        tempAns = numArr[i] * numArr[i + 1];
        numArr.splice(i,2, tempAns);
        operArr.splice(i,1);
        i--;
      }
    }
    for (var i = 0; i < operArr.length; i++) {
      if (operArr[i] == "+") {
        tempAns = numArr[i] + numArr[i + 1];
        numArr.splice(i,2, tempAns);
        operArr.splice(i,1);
        i--;
      }
    }
    for (var i = 0; i < operArr.length; i++) {
      if (operArr[i] == "-") {
        tempAns = numArr[i] - numArr[i + 1];
        numArr.splice(i,2, tempAns);
        operArr.splice(i,1);
        i--;
      }
    }
  }

  numArr[0] = Math.round(100 * numArr[0]) / 100;

  return numArr[0];

}

//Assign key presses to button click triggers
function keyboardListener(key) {
  switch (key) {
    case 13:
      $("#equals").trigger("click");
      break;
    case 42:
      $("#multiply").trigger("click");
      break;
    case 43:
      $("#add").trigger("click");
      break;
    case 45:
      $("#subtract").trigger("click");
      break;
    case 46:
      $("#decimal").trigger("click");
      break;
    case 47:
      $("#divide").trigger("click");
      break;
    case 48:
      $("#zero").trigger("click");
      break;
    case 49:
      $("#one").trigger("click");
      break;
    case 50:
      $("#two").trigger("click");
      break;
    case 51:
      $("#three").trigger("click");
      break;
    case 52:
      $("#four").trigger("click");
      break;
    case 53:
      $("#five").trigger("click");
      break;
    case 54:
      $("#six").trigger("click");
      break;
    case 55:
      $("#seven").trigger("click");
      break;
    case 56:
      $("#eight").trigger("click");
      break;
    case 57:
      $("#nine").trigger("click");
      break;
             }
}
