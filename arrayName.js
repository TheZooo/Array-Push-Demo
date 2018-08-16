var fName = []; //Arrays to store name
var lName = [];
var x = prompt("Insert First Name"); //Prompt for Names from user
var y = prompt("Insert Last Name");
fName.unshift(x); //Puts prompts into arrays
lName.unshift(y);
window.alert(x.length + y.length + " " + "Letters"); //Displays the amount of letters used in both prompts
window.alert(fName + " " + lName); //Displays name from arrays
