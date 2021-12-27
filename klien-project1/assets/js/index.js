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
$(".accordion > li > div").click(function(){
    // display:'block'
if($(this).next().is(":visible")== false){
    $(".accordion ul").slideUp();
}
$(this).next().slideToggle();
});
});
// scroll to top**********************