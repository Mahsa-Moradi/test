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
// functionName(); === arguments
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
    return "Super ***";
    2; // console.log("Super");
  } else {
    return "Bad ---";
    2; // console.log("Bad");
  }
}
var sara = Avrage(15, 20, 12, 20, 19);
var ali = Avrage(1, 14, 2, 20, 19);
console.log(sara);
console.log(ali);
2; // Avrage(15, 10, 2, 20, 19);
2; // Avrage(15, 10, 20, 20, 19);
// _
1; // var f=Avrage(15, 10, 2, 20, 19);
1; // console.log(f);
// 5a ........................ sum  function
function add(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(add(10, 58, 33));
console.log(add(10, 303));
console.log(add(10, 58, 33, 758));
// ___________________****____________ sum (arguments.length)
function my() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(my());
console.log(my(5, 41));
console.log(my(5, 10));
console.log(my());
// _________________****____________ avg (arguments.length)

function avgFunction() {
  sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    avrgg = sum / arguments.length;
  }
  return avrgg;
}
console.log(avgFunction(15 * 3, 19 * 1, 17 * 2, 9 * 2, 10 * 3));
// 6a ........................ input num  function
function myFunction() {
  console.log(arguments.length);
}
myFunction();
myFunction(4);
myFunction(4, 50);

// 7a ......................................... rest  function
function myFunction1(...numbers) {
  console.log(numbers);
}
myFunction1();
myFunction1(5);

// ________________****____________ sum (rest)
function add1(...addation) {
  sum1 = 0;
  for (i = 0; i < addation.length; i++) {
    sum1 += addation[i];
  }
  return sum1;
}
console.log(add1());
console.log(add1(5, 4));

// ................................ power(tavan)
function power(base, exponent) {
  var result = 1;
  for (i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 4));

// ................................ prime(addad aval)
function prime(number) {
  var count = 0;
  for (var i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}
console.log(prime(24));
console.log(prime(11));
console.log(prime(19));
// _______
function isprime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }

  return true;
}
// console.log(isprime(11));
// __
function rangPrime(firstname,lastname){
    result=[];
    for(i=firstname ; i<=lastname ; i++){
        if(isprime(i) == true)
            result.push(i); 
    } 
     return result;
}
console.log(rangPrime(10,110));

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

// * Arrow function expression ( feshordeh shode expression ast) *
var name1 = () => console.log("helllllo ");
name1 ();
//   ................sum
var add2 = (a,b) => a+b;
console.log(add2(2,5));
//   ................ power Arrow function
var power1=(num) => num*num;
console.log(power1(10*5));
// ........... power 
var power1=(num) =>{
    for (var i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
  
    return true;
  }
  console.log(power1);
// ..................... ********* callback  function 
function firstfunction(callback){
    console.log('salam');
    callback();
}
firstfunction(secoundfunction);
function secoundfunction(){
    console.log('khobi ?');
}
// ..................... ********* scope function 