// $(document).ready(function () {
//   $(".collpse-heading").click(function () {
//     $(".collapse-controls").removeClass("open");
//     if ($(this).next(".collapse-body").css("display")=="block") {
//       $(".collapse-body").slideUp("open");
//     } else {
//         $(this).next(".collapse-body").slideDown();
//       $(".collapse-body").slideDown("open");
//     }
//   });
// });
// ............................................
$(document).ready(function(){
$('.collpse-heading').click(function(){
$('.collapse-controls').removeClass('.open');
if($(this).next('.collapse-body').css('display')== 'block'){
    $('.collapse-body').slipeUp('open');
}else{
    $(this).next('.collapse-body').slipeDown();
    $(this).children('.collapse-controls').addClass('open');
}


});
});