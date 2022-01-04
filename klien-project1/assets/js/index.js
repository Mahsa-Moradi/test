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

$(document).ready(function () {
  $(".accordion > li > div").click(function () {
    // display:'block'
    if ($(this).next().is(":visible") == false) {
      $(".accordion ul").slideUp();
    }
    $(this).next().slideToggle();
  });
});
// scroll to top**********************
$(window).scroll(function () {
  if ($(this).scrollTop() >= 200) {
    // $('.scroll-to-top').fadeIn('slow');
    $(".scroll-to-top").css({
      bottom: "20px",
    });
  } else {
    // $('.scroll-to-top').fadeOut('slow');
    $(".scroll-to-top").fadeOutcss({
      bottom: "-60px",
    });
  }
});

$(".scroll-to-top").click(function (e) {
  e.preventDefault();
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
// MODAL**********************
$(document).ready(function () {
  $(".modal-link").click(function (e) {
    e.preventDefault();
    $(".bg-modal").fadeIn(function () {
      $(".modal").fadeIn();
      //    yekam delay dare
      // $(".modal").fadeIn();
    });
  });
  $(".modal-link").click(function (e) {
    e.preventDefault();
  });
  $(".close , .bg-modal").click(function (e) {
    e.preventDefault();

    $(".modal").fadeOut(function () {
      $(".bg-modal").fadeOut();
      // ye takhiri dare.agar har amali aval anjam besheh BAYAD aval benevisim.[mesle jabejaii (modal) VA (bg-modal)]
    });
  });
});
// FORM**********************
$(document).ready(function(){
    $("#add").click(function(e){
        e.preventDefult();
$(".input-group").append();
    });
});