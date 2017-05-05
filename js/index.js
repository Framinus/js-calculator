// allows me to get user input from the screen
var box= document.getElementById('screen');
var x;
// displays numbers and operators on the screen
function addtoscreen (x) {
  if (x==="c") {
    box.value="";
  } else {
    box.value+=x;
  }
}

// allows user to remove last character typed
function backspace () {
  x=box.value
  x=x.slice(0, -1);
  box.value=x; 
}

// square root function - fun!
function square () {
  x=box.value
  x=Math.sqrt(x);
  box.value=x;
}

// multiples number to the 2nd power. removed button for now, will add back with a row of fun buttons.
function power () {
  x=box.value
  x=x*x;
  box.value=x;
}

// gets the total of input when equal key is pressed.
function answer () {
  x=box.value
  x=eval(x);
  box.value=x;
}