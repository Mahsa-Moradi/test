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
$(document).ready(function () {
  $("#add").click(function (e) {
    e.preventDefault();
    $("#add").before(
      "<div class='input-group'><label for='input' >Geschidenis</label><input type='text' id='input'  placeholder='Add Informatie...'/></div>"
    );
    // .input-group :khodesh ro ijad bokon
    // #add: ye onsor digei ro ijad kon
  });

  //  TIPS1: "append va prepend"= az Daron ezafeh mishavand
  //  "befor va after": az Biron ezafeh mishavand
  //  TIPS2: chikar konim ke 1 ya 2 ya 3 ta INPUT ezafeh shavad?  bayad vabastegi Anasor ro bardarim YANI begim "#add" be jaye ".input-group" .
});

// hidden and visaible passwor(eyes)********
$(document).ready(function () {
  $("#show-pass").click(function () {
    if($(".pass").attr("type") === "password") {
      $(".pass").attr("type", "text");
      $("#show-pass").removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
      $(".pass").attr("type", "password");
      $("#show-pass").removeClass("fa-eye").addClass("fa-eye-slash");
    }
  })
})
// owl slider **********************

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    rtl:true,
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
    }
  });
});
