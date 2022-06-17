// ***************************(let ,const)!= Hoisting = var
// declare (tarif kardan) _____________ var a / var firstName;
// initialize (meghdar dehi kardan) ___ a=5 / firstName ='mahsa';; 
var firstName='mahsa';
console.log(firstName);
// ============
// declare = hoistong
var firstName;
console.log(firstName);
firstName ='mahsa';
// initialize != hoisting
// ............................ let , const != hoisting
let firstName1;
console.log(firstName1);
firstName1 ='mahsa';
// .......................
// const firstName2;
// console.log(firstName2);
// firstName2 = 'moradi';

// ...................................
const a=5;
function num(){
    console.log(b);
    var b=4;
    }

num();
// ............
const a1=5;
function num(){
    b=6;
    console.log(b);
    var b;
    }

num();










// ..............................................variable Hoisting

















// ..............................................function Hoisting