// $(document).ready(function(){
//      $('.test').hide(1000);
// })

$(function () {
  $("div.test").show();
});

$(function () {
  $(".m span").hide();
});

$(document).ready(function () {
  // $(".click").dblclick(function(){
  // $(".click").mouseleave(function(){
  // $(".click").mouseenter(function(){
  // $(".click").mousedown(function(){
  $(".click").mouseup(function () {
    $(".click").hide();
  });
});

$(document).ready(function () {
  $(".m").on("click", function () {
    $("div").hide();
  });
});

$(document).ready(function () {
  $("p.click1").on({
    click: function () {
      $("p.click1").css("color", "red");
    },
    mouseleave: function () {
      $("p.click1").css("color", "blue");
    },
    // :function(){
    //     $("click1").css("","")
    // }
  });
});

$(document).ready(function () {
  //   $(".c1").click(function () {
  //     $(".test1").fadeOut("60s");
  //   });
  $(".c1").hover(function () {
    $(".test1").slideUp("60s");
  });
  //   *****************************
  //   $(".c2").click(function () {
  //     $(".test1").fadeIn("slow");
  //   });
  $(".c2").hover(function () {
    $(".test1").slideDown("60s");
  });
  // *****************************

  //   $(".c3").click(function () {
  //     $(".test1").fadeToggle("80s");
  //   });
  $(".c3").click(function () {
    $(".test1").slideToggle("80s");
  });
  //   ********************************
  $(".c4").click(function () {
    $(".test1").fadeTo("slow", 0.7);
  });
});
// Animation*********************
$(document).ready(function () {
  $(".b1").click(function () {
    $(".testb1").animate({
        width: "+=150px", // arze ghabli + 150
        // width:"150px",
        // width:"toggle",
        height: "300px",
        // height: "toggle",
        // bottom:"100px" ,
        // left:"10px" ,
        opacity: "0.5",
        borderRadius: "80px",
      },
      5000
    ); // zaman ejra
  });
});
// *********************
$(document).ready(function () {
  $(".d1").click(function () {
    var x = $(".testd1");
    x.animate({
      //   width:'200px',height:'100px'
      //   ham zaman width va height etefagh miofte
    });
    x.animate(
      {
        width: "200px",
      },
      5000
    );

    x.animate({
      height: "200px",
    });
    //  AVAL width
    // BAD height etefagh miofte
    x.animate({
      top: "-200px",
    });
  });
});
//   get_set    ******************************
$(document).ready(function () {
  $("span.g1").click(function () {
    // alert("mytext is :" + $(".getg1").text()); // neshan dadan matn
    // alert("mytext is :" + $(".getg1").html());// neshan dadan "tag haye html"
    //   alert("value is :"+$(".inputg1").val());
    //   console.log("value is :"+$(".inputg1").val());
    // console.log("attribute is :" + $(".inputg1").attr('type'));
  });
});
//   ****************
$(document).ready(function () {
  $("span.g2").click(function () {
    //   $(".getg2").text('goodbye');
    // $(".getg2").html('<i>goodbye</i>');
    // $(".getg2").html('<b>goodbye</b> test');
    // $(".inputg2").val('SARA');
    // $(".inputg2").attr('type','password');
    $(".inputg2").attr({
      type: "password",
      class: "inputsg2",
    });
  });
});
// add(append,prepend,after,befor)*****
$(document).ready(function () {
  $(".add-remove").click(function () {
    $("ul").append("<li>afterrrr text</li>");
  });
  $(".add-remove1").click(function () {
    $("ul").prepend("<p>befoooor text</p>");
  });
  $(".add-remove2").click(function () {
    $("ul").before("<p>befor text</p>");
  });
  $(".add-remove3").click(function () {
    $("ul").after("<p>after text</p>");
  });

  // remove(append,prepend,after,befor)*****

  $(".add-remove4").click(function () {
    $("ul.r-e").remove();
  });
  $(".add-remove5").click(function () {
    $("ul.r-e").empty("<p>after text</p>");
  });
  $(".add-remove6").click(function () {
    $("ul.r-e").remove(".f-li");
    // ! Chon valed daran nemishe remove kard
  });
  $(".add-remove6").click(function () {
    $("span").remove(".add-remove4 ,.add-remove5");
    // ! Chon class ="add-remove4" valed nadaran mishe remove kard
  });
});
// *********************************
$(document).ready(function () {
  $(".btn-1").click(function () {
    $("div.amuzesh").addClass("add-class secound-class");
  });

  $(".btn-2").click(function () {
    $("div.amuzesh").removeClass("add-class");
  });
  $(".btn-3").click(function () {
    $("div.amuzesh").toggleClass("add-class secound-class");
  });
  $(".btn-4").click(function () {
    // $('div.add-style').css('color','red');
    $("div.add-style").css({
      color: "red",
      "font-size": "25px",
      "background-color": "yellow",
    });
  });
});
// *************************
$(document).ready(function () {
  $(".e1").click(function () {
    var e2 = $(".e2").width();
    var e3 = $(".e2").height();
    var e4 = $(".e2").innerWidth();
    var e5 = $(".e2").innerHeight();
    var e6 = $(".e2").outerWidth();
    var e7 = $(".e2").outerHeight();
    $("p.e-width").text(e2);
    $("p.e-height").text(e3);
    $("p.e-inner-width").text(e4);
    $("p.e-inner-height").text(e5);
    $("p.e-outer-width").text(e6);
    $("p.e-outer-height").text(e7);
  });
});
//  traversing******************
$(document).ready(function () {
  $("span.kinderen").parent().css({
    backgroundColor: "red",
    color: "white",
  });
});
// $(document).ready(function(){
//     $('span.kinderens').parents().css({
//         // backgroundColor: "blue",
//         color:"blue"});
// });
// ******entekhab KODAM valed
$(document).ready(function () {
  $("span.kinderens").parents("ul").css({
    color: "GREEN",
    border: "7px solid black",
  });
});
// $(document).ready(function(){
//     $('span.kinderens').parents('ul').fadeOut();
// });// mahv mishavad
// descendants******************
// $(document).ready(function(){
// $('li').children('.h1').css({
// "color": "orange"
// });
// });
$(document).ready(function () {
  $("ul").find(".h1").css({
    color: "orange",
  });
});
// *******
$(document).ready(function () {
  // $('h3').siblings().css({
  // 'color' : 'red'
  // });
  // $('p.h2').siblings().css({
  //     'color' : 'red'
  //     });
  // $('p.h2').siblings('div.h3').css({
  //     'color' : 'red'
  //     });
  // $('h3').next().css({
  //     'color' : 'red'
  //     });
  // $('p').next('div').css({
  //     'color' : 'red'
  //     });
  // $('p').nextAll().css({
  //     'color' : 'red'
  //     });
  // $('a').nextAll('h3 , div').css({
  //     'color' : 'red'
  //     });
  // $('a').prevAll().css({
  //     'color' : 'red'
  //     });
  //   $("a").prevAll('p').css({
  //     color: "red",
  //   });
});

$(document).ready(function () {
  // $("div").nextUntil('p.h2').css({
  //         color: "red",
  //       });
  // $("div.h0").nextUntil('div').css({
  //     color: "red",
  //   });
  $("div.h0").prevUntil("div").css({
    color: "red",
  });
});
// filter in the traversing************************
// $(document).ready(function() {
// //    $('div.h5').first().fadeOut();
// // $('div.h5').first().css({
// //     'color':'red'
// // });
// $('div').last().css({
//     'color':'red'
// });
//     });

$(document).ready(function() {
    // $('div.h5').eq(2).css({
    //     color:'red'
    // });
    // $('div').filter('div.h6').find('p.h8').css({
    //     color:'red'
    // });
    $('div').not('div.h6').find('p.h9 ').css({
        color:'red'
    });
        });















    // $(document).ready(function(){

    // }); 