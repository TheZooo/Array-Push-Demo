var fName = [];
var lName = [];
var x = prompt("Insert First Name");
var y = prompt("Insert Last Name");
fName.unshift(x);
lName.unshift(y);
window.alert(x.length + y.length + " " + "Letters");
window.alert(fName + " " + lName);
