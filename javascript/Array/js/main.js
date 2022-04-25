// **********************************************   Array
var numbers =[12,25,87,68,92];
console.log(numbers[0]);
console.log(numbers[5]);
// ..............................
var a =12 ;
console.log(typeof a);
// ..............................
var a1 ='12' ;
console.log(a1.length);
// ...................
var a2 =[12,92,92] ;
console.log(a2.length);
// ..............................
var b = [87,68,92];
console.log(typeof b);
// ..............................
var c=[];
c[3]='mahsa';
console.log(c);
// ..............................
var d=[25,"mahsa",78];
var d1=[25,"mahsa",78];
console.log(d==d1);
// ..............................
var e=[25,"mahsa",78];
var e1=[25,"mahsa",78];
console.log(e[0]==e1[0]);
// .................................... avrege
var grades=[14.5,14,19,20,18,11,20,8.7]
var sum = grades[0]+grades[1]+grades[2]+grades[3]+grades[4]+grades[5]+grades[6]+grades[7];
var avrege = sum / grades.length;
console.log(avrege);
// ..............................  avrege
var grades1=[14.5,14,19,20,18,11,20,8.7];
var sum=0;
for(i=0 ; i<=grades1.length-1 ; i++){
    sum += grades1[i];
    }
    avg = sum / grades1.length;
    console.log(avg);

// .............................. even is or not
var num =[17 , 150 , 21 , 54 , 68 , 36 , 91 ,77];
for(var i=0 ; i<= num.length; i++){
    if(num[i]%2 == 0){
      console.log(num[i]);  
    }
    
}
// **********************************************   Array methods
// ....................................continue Array  to strings
var array1=[14.5,'true',19,'mahsa',20,8.7];
console.log(array1);
// ...................... to String

var g = array1.toString();
console.log(g);

// ...................... join
var g2 = array1.join('*');
console.log(g2);

// ...................... pop ( delet last elemets)
 array1.pop();
console.log(array1);

// ...................... push (addation last elemets)
array1.push('*' , 'addation last elemets' );
console.log(array1);

// ...................... shift (delet first elemets)
array1.shift('*' , 'ki' );
console.log(array1);

// ...................... unshift (addation first elemets)
array1.unshift('addation first elemets'  );
console.log(array1);
// .........
// array1[array1.length]=8;
array1[8]=8;
console.log(array1.length);