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
        height:"300px" ,
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
      x.animate( { 
        //   width:'200px',height:'100px'    
          //   ham zaman width va height etefagh miofte
       }); 
       x.animate( { 
        width:'200px'},5000);

       x.animate( { 
            height:'200px'});
            //  AVAL width 
            // BAD height etefagh miofte
            x.animate( { 
                top:'-200px'});
    });
  });