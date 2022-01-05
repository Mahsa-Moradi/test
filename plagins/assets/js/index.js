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
//  **** slick slider**********

// $(document).ready(function(){
//     $('.my_silck_slider').slick({
//       setting-name: setting-value
//     });
//   });
  $(document).ready(function(){
  $('.my_silck_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});