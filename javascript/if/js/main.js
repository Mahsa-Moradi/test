// ***************  if  ***************************

var gender = "male";
// var gender = "female";
var age = 28;
// .............. && ............

if( gender == "male" &&  age >=18 ){
    console.log(" welcome male");
}
else{
   console.log("welcome female"); 
}
// .............. ||  ............

if( gender == "female" ||  age >=18 ){
    console.log(" welcome dear");
}
else{
    console.log("error");
}

// .............. example ............

var grade = 45;
if(grade >= 34){
    console.log( grade + " > 34");
}
else{
    console.log( grade + " < 34");
}