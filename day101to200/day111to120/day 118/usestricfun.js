x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14; // This will cause an error
}

x = { p1: 10, p2: 20 }; // error

let x = 3.14;
delete x; // error deleting not allowed

function x(p1, p2) {}
delete x;
