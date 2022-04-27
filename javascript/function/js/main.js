// function declaration
// function expression
// ************************************************  Function
// ........................

console.log("First name : Mahsa");
console.log("Last name : Moradi");
console.log("Age : 29");
// ...................
var a = ["First name : Mahsa", "Last name : Moradi", "Age : 29"];
for (i = 0; i <= addEventListener.length; i++) {}
console.log(a);
// ............................. ********* function declaration
// 1a ........................
// inputs (num1,num2) === parameter
function functionName(inputs) {
  // code
}
// functionName(); === argument
functionName();
// 2a ........................
function showBio() {
  console.log("First name : ********* Mahsa");
  console.log("Last name : Moradi");
  console.log("Age : 29");
}
showBio();
showBio();
showBio();
// 3a ........................ add 2 number
function addnumbers(num1, num2) {
  console.log(num1 + num2);
}
addnumbers(5, 200);
addnumbers(5, 10);
// ________
function addnumbers1(num1, num2) {
  console.log(num1 + num2);
}
var a = addnumbers1(62, 400000);
console.log(a);
// ===
function addnumbers2(num1, num2) {
  return num1 + num2;
  // dastor bad return Ejra nemisheeeeeh  (not run)
  console.log(b);
}
var b = addnumbers2(62, 400000);
console.log(b);
// 4a ............................ AVrage normal
var c1 = 12;
var c2 = 20;
var c3 = 14;
var c4 = 19;
var c5 = 10;
var sum = c1 + c2 + c3 + c4 + c5;
var av = sum / 5;
// console.log(av);
if (av >= 15) {
  console.log("good");
} else {
  console.log("not good");
}
// ______________ AVrage function
function Avrage(cc1, cc2, cc3, cc4, cc5) {
  sum = cc1 + cc2 + cc3 + cc4 + cc5;
  av = sum / 5;
  if (av >= 15) {
    return 'Super ***';
    2// console.log("Super");
  } else {
    return 'Bad ---';
    2// console.log("Bad");
  }
}
var sara=Avrage(15, 20, 12, 20, 19);
var ali=Avrage(1, 14, 2, 20, 19);
console.log(sara);
console.log(ali);
2// Avrage(15, 10, 2, 20, 19);
2// Avrage(15, 10, 20, 20, 19);
// _
1// var f=Avrage(15, 10, 2, 20, 19);
1// console.log(f);
// ............................. ********* function expression
// 1b ........................
var name = function () {
  // code
};
// 2b ........................
var names = function () {
  console.log("First name : ....... Mehrdad");
  console.log("Last name : Moradi");
  console.log("Age : 34");
};
names();
// 3b ........................ add 2 number
var numbers1 = function (num1, num2) {
  console.log(num1 + num2);
};
numbers1(50, 14);
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
