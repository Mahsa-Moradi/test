$(document).ready(function () {
  $("span.g1").click(function () {
    // alert("mytext is :" + $(".getg1").text()); // neshan dadan matn
   
    // alert("mytext is :" + $(".getg1").html());// neshan dadan "tag haye html"
    alert("mytext is :"+$("input").val());
  });
});
