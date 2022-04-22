// ***************  if  ***************************

var gender = "male";
// var gender = "female";
var age = 28;
// .................................... && 

if (gender == "male" && age >= 18) {
  console.log(" welcome male");
} else {
  console.log("welcome female");
}
// ..................................... ||  

if (gender == "female" || age >= 18) {
  console.log(" welcome dear");
} else {
  console.log("error");
}

// ................................. example 
// mitunim   N   ta  'if'  benevi30m (az bala be paiin ejra misheh)
var grade = 45;
if (grade >= 34) {
  console.log(grade + " > 34");
}
if (grade >= 340) {
  console.log(grade + " > 34");
}
if (grade >= 4) {
  console.log(grade + " > 34");
}
if (grade >= 134) {
  console.log(grade + " > 34");
}
if (grade >= 24) {
  console.log(grade + " > 34");
}
// ............... .................... else
var num = 22;
if (num % 2 == 0) {
  console.log("even getald");
} else {
  console.log("oneven getald");
}
// ................................... example 
var num1 = -10;
if (num1 > 0) {
  console.log(num1);
} else {
  console.log(-num1);
}
// .................................... example
var num2 = 11;
if (num2 % 2 == 0) {
  console.log("Even");
} else {
  console.log("Oneven");
}

// *************************************else  if 
var avrage = 15;
if (avrage <= 10) {
  console.log("so bad");
} else if (11 <= avrage <= 15) {
  console.log("normal");
} else if (16 <= avrage <= 17) {
  console.log("good");
} else {
  console.log("perfect");
}
// .................................... example 
var gender2 = "female";
var age = 16;
if (gender2 == "male") {
  if (age == 15) {
    console.log("Hello male");
  } else {
    console.log("Hello male but you can not input");  
  }
} else {

    if (age >= 15) {
        console.log("Hello female");
      } else {
        console.log("Hello female but you can not input");  
      }
}

// ................................. example day
var day = 5;
if ( day == 0)
  console.log("sunday");
  else if( day == 1)
  console.log("monday"); 
  else if( day == 2)
  console.log("tuesday"); 
  else if( day == 3)
  console.log("wensday"); 
  else if( day == 4)
  console.log("thursday"); 
  else if( day == 5)
  console.log("friday"); 
  else if( day == 6)
  console.log("saturday"); 
  else 
  console.log("ERROR"); 