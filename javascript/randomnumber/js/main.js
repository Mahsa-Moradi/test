const randomNumber = Math.random();
console.log(randomNumber);
// ..............
var randomNumber1 = Math.random() * 101;
console.log(randomNumber1);
// .............. delet aashar number
let randomNumber2 = Math.random() * 15;
// randomNumber2 = Math.floor(10.5)
randomNumber2 = Math.floor(randomNumber2);
console.log(randomNumber2);
// .............. karbar vared koneh
// let randomNumber3
// while(true){
// const UserNumber = prompt('Enter a number :')
// // alert(UserNumber)
// alert(typeof(UserNumber))
// }
// .................................
// while(true){
//     const UserNumber1 = prompt('Enter a number :')
//     alert(UserNumber1)

//     }
// .................................
// let randomNumber3 = Math.random() * 5;
// randomNumber3 = Math.floor(randomNumber3);
// while (true) {
//   const UserNumber2 = prompt("Enter a number :");
//   if (UserNumber2 == randomNumber3) {
//     alert("Succes");
//     break
//   } else if (UserNumber2 < randomNumber3) {
//     alert("big number !!!");
//   } else {
//     alert("small number");
//   }
// }

//  .................................
let password = 'mahsa123';
let i = 1
while(i <= 3){
    const user = prompt('Enter your password :')
    if(user == password){
        alert('succes ... ');
        break;

    }else{
        const massage = prompt('Try again  ${3-i}')
        alert('Try again ...');
    }
    i++;

}
// .................................

// document.getElementById('').innerHTML=math.floor(math.random()*10);
