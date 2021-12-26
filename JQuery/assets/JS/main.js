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
    $(".testb1").animate(
      {
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
      $('div.amuzesh').addClass('add-class secound-class');
  });

  $(".btn-2").click(function () {
    $('div.amuzesh').removeClass('add-class');
});
$(".btn-3").click(function () {
    $('div.amuzesh').toggleClass('add-class secound-class');
});
$(".btn-4").click(function () {
    // $('div.add-style').css('color','red');
    $('div.add-style').css({
"color":"red",
"font-size":"25px",
"background-color": "yellow"


});
});
});