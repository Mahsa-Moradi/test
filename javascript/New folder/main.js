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
