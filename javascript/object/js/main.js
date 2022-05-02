// ************************************ object property(age: "36")
const object_name = {
  firstname: "mahsa",
  lastname: "moradi",
  age: "36",
  favorites: ["painting", "music"],
};
console.log(object_name);
// object_name.firstname();
// 1  ....................( object_name1.favorites )
const object_name1 = {
  firstname: "mahsa",
  lastname: "moradi",
  age: "36",
  favorites: ["painting", "music"],
};
console.log(object_name1.favorites);
// 2 ......................
const object_name2 = {
  firstname: "mahsa",
  lastname: "moradi",
  age: "36",
  favorites: ["painting", "music"],
};
console.log(object_name2["age"]);
// ************************************ object method
const object_method = {
  firstname: "mehrdad",
  lastname: "moradi",
  codeing: function () {
    return "mahsa is coding ... ";
  },
};
console.log(object_method.codeing());
// ************************************ object nesting
const sara = {
  firstname: "sara",
  lastname: "loren",
  age: "29",
  codeing : function(){
return 'Hello sara ... '
  },
  grates: {
    Math: 20,
    arabic: 18,
    sport: 20,
    geometry: 16,
  }
}
console.log(sara);
console.log(sara.grates.geometry);
// ************************************ object empty
const rose = {};
rose.firstname = 'rose';
console.log(rose);
// ************************************** object reference
// addres 'array1'  "copy"  misheh dar  'array2' ===> ([ !*! ])
let array1 = [1,5,70];
let array2 = array1;
array2[3] = 55;
array2[4] = 10;
console.log(array2);
// ************************************ object clone

const jozef = {
    firstname: 'jozef',
    lastname: 'jozef-mari',
    age: 92
};
const mari = jozef;
mari.ismarried = false;
console.log(mari);
// ........................... 
// addres 'jozef1'  !=  addres 'mari1' (joda ast) ===> ([ !*! ])

const jozef1 = {
    firstname: 'jozef1',
    lastname: 'jozef-mari1',
    age: 92
};
const mari1 = {...jozef1};
mari1.ismarried = true;
console.log(mari1);

// ************************************** spreade operator
// ************************************** object shallow(copy) clone(kkan omgh) 
// vs deep clone
