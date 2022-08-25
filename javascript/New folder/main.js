var foo = "Hello";
(function() {
  var bar = " World";
//   alert(foo + bar);
})();
// alert(foo + bar);


// ................
var foo = [];
foo.push(1);
foo.push(2);
// alert(foo.length );
// ..................
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
// alert(foo.x);
// ................
console.log('one');
setTimeout(function() {
  console.log('two');
}, 10);
console.log('three');


// ................................
var xl = [1,5,7];
var sum=0;
for(i=0; i<=xl.length-1 ; i++){
  sum += xl[i];
  
}  
avg= sum / xl.length;

console.log(avg);
// ...............................
var even=[20,5,87,6];
for(i=0 ; i<=even.length; i++){
  if(even[i]%2==0){
    console.log(even[i])
  }
}
// ...............................
var even=[20,5,87,6];
for(i=0 ; i<=even.length; i++){
  if(even[i]%2==1){
    console.log(even[i])
  }
}

// ...........................
var maximum=[20,5,87,6];
// for(i=0 ; i<=maximum.length; i++){
//   if(maximum[i]>maximum[i+1]){
//     console.log(maximum[i]);
//   }
// }
var max=0;
for(i=0 ; i<=maximum.length; i++){
  if(maximum[i]>max){
    max=maximum[i]
  }
}    console.log(max);
// .................
function avgg(n1,n2,n3){
  sum=n1+n2+n3;
  g=sum/3;
  if(g<10){
    return "bad"
  }else{
    return "gooooooooooooooood"
  }

}
var m=avgg(20,15,16);
console.log(m);
