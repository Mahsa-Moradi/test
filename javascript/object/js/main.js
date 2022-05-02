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
// ************************************** object method
const object_method = {
  firstname: "mehrdad",
  lastname: "moradi",
  codeing: function () {
    return "mahsa is coding ... ";
  },
};
console.log(object_method.codeing());
// ************************************** object nesting
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