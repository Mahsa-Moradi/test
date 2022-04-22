var a = 0;
while (a <= 15) {
  console.log("Mahsa");
  a++;
}
// .......................
var b = 1;
while(b<=5){
    console.log(b);
    b++;
}
// ....................... mode 7
var c = 10;
while(c<=35){
    if(c % 7 ==0){
        console.log(c);
    }
    c++;
}
// ....................... mode 5
var d ="";
while (d<=100){
    if(d % 5 ==0 && d % 7 ==0){
        console.log(d);
    }
    d++;
}
// .................. sum 1 to 5 number
var sum=0 , i = 1;
while(i<=5){
    sum += i;
    i ++;
}
console.log('Total :'+' '+ sum);

//  .................. multipication 1 to 5 number
var mult=1 , i = 1;
while(i<=5){
    mult *= i;
    i ++;
}
console.log('Multipication :'+' ' + mult);