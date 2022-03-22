// var j = $noConfict();
// j(document).ready(function(){
// j(".accordion > li > div").click(function(){
//     // display:'block'
// if(j(this).next().is(":visible")== false){
//     j(".accordion ul").slideUp();
// }
// j(this).next().slideToggle();
// });
// });

$(document).ready(function(){
  $('menu-btn').click(function(){
    $('#circle-menu').toggleClass('active');
  });
});
