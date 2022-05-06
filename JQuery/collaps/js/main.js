$(document).ready(function () {
  $(".collpse-heading").click(function () {
    $(".collapse-controls").removeClass("open");
    if ($(this).next(".collapse-body").css("display") == "block") {
      $(".collapse-body").slideUp("open");
    } else {
      $(".collapse-body").slideDown("open");
    }
  });
});
