// ********************************** for
// ................ show number 1 to 5
for (var i = 1; i <= 5; i++) {
console.log(i);
}


// ................ show number 5 to 1

for (var j = 5; j <= 5; j++) {
  console.log(j);  
}

// ....................... mult 1 to 5
var sum = 1 , k;
for ( k = 1; k <= 5; k++) {
  sum *= k;
}
console.log(sum);
// ........................... counter (maghsumo elaih)
var counter = 0 , num = 5;
for ( i=1 ; i<=num ; i++){
    if( num % i ==0)
    counter ++;
}
if (counter==2){
    console.log('aval');
}
else{
    console.log('morakab'); 
}

// ........................... true
// for( var f =1 ; true ; f++){
//     console.log(f);
// }

// while(true){
//     console.log('f');
// }
// ........................... true
// for( var g =1 ; g>0 ; g++){
//     console.log(g);
// }