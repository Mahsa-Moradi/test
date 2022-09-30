function greet() {
  console.log("hello word");
}
greet();
// .......................
function greet1(name, age) {
  console.log(" heeeeelllo " + name + " you are " + age + " jaar");
}
// greet1('mahsa', 30);
let result = greet1("mahsa", 30);
console.log(result);
// .......................number = moteghayer
// * amalgar
function square(number) {
  let resultSquare = number * number;
  return resultSquare;
}
let resultSquare = square(4);
console.log(resultSquare);
// .......................
function square1(number, k) {
  let resultSquare1 = number * k;
  return resultSquare1;
}
let resultSquare1 = square1(4, 5);
console.log(resultSquare1);
// ....................................... login
let athenticated = true;
let bottonText = athenticated === true ? "dashboerd" : "login";
console.log(bottonText);
// ......................................... pududact
let prudact = 3;
let prudactPrice = 1000;
let credit = 1200;
let buy = prudact > 0 && credit > prudactPrice;

console.log(buy);
console.log(!buy);

// .......................
function modal(a, b) {
  let x = a * b;
  return x;
}
// let x = modal(2,5);
// console.log(x);
console.log(modal(2, 5));

// ....................... zzzzzzzzzzzab
function rt() {
  for (var i = 1; i < 2; i++) {
    // return i
  }

  for (var j = 4; j < 5; j++) {
    // return j
  }
  console.log(ij);
}
rt();
// .................................................
//  خروجی پراممت رشته است عملیات جمع انجام نمیشود
// (parseInt va eval)  reshteii be addad tabdil kon
function getNumber() {
  var n1 = parseInt(prompt("First Number : ")) 
  var n2 = eval(prompt("secound Number: "))
  var op = prompt("Enter Operato : ")
  var result = calc(n1, n2, op)
  alert(result)
}
function calc(num1,num2,optator) {
  switch(optator) {
    case "+":
      return(num1+num2);
    case "-":
      return(num1-num2);

    case "*":
      return(num1*num2);

    case "/":
      return(num1/num2);
  }
}
// getNumber();
// getNumber();
// agar bekhahim chand bar ejra shavad
// ...........................................
function printNumber(){
  var k=eval(prompt('min: '))
  var h=eval(prompt('max: '))
  for(var i=min ; i<=max; i=i+2){
    console.log(i+'</br>')
  }
}