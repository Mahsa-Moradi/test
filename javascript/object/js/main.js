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
  favorites: ["painting", "music"]
};
console.log(object_name1.favorites);
// 2 ......................
const object_name2 = {
    firstname: "mahsa",
    lastname: "moradi",
    age: "36",
    favorites: ["painting", "music"]
  };
  console.log(object_name2['age']);
// ************************************** object method
const object_method = {
    firstname :'mehrdad',
    lastname :'moradi',
    codeing : function(){
return 'mahsa is coding ... ';
    }
}
console.log(object_method.codeing());
