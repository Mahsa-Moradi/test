// ************************************************** for-off
//      [  array / string / map / set(majmoeha)  ]

// for(let element of itrabel){
//   console.log(element);
// }

// ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
let myArray=[15,47,87,95,36,25,12];
for(i=0 ; i<=myArray.length ; i++){
  console.log(myArray[i]);
}
// ______________
console.log('**********************');
// _____________ for-off ____________ element ya har esme digeii
for(let element of myArray){
  console.log(element);
}
//.......................
console.log('**********************');
// ......................
let str = 'mahsa moradi';
for(element of str){
  console.log(element);
}
//.......................
console.log('********************** for in');
// ************************************************** for-in
// .................... object = name
// for(key in object){

// }
// ......................
const myArray1 = [25,58,74,95,65,23,145];
const mahsa = {
  firstname : 'mahsa',
  lastname : 'moradi',
  age : '29',

};
for(let key in mahsa){
  console.log(key);
}
