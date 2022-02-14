var countDownDate = new Date("february 14 , 2022 21:41:11").getTime();

var X = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    '<span id = "day">' +
    days +
    "</span>" +
    '<span id = "hours">' +
    hours +
    "</span>" +
    '<span id = "minutes">' +
    minutes +
    "</span>" +
    '<span id = "seconds">' +
    seconds +
    "</span>";

  // distance = time count-down < 0 va -0  "Finish" namayesh bedeh.
  if (distance < 0) {
    clearInterval(X);
    // خالی باشه تا عدد منفی نخوره
    // document.getElementById("demo").innerHTML = "";
    var y = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "oo";
    }

    // document
    //   .getElementById("after-expire")
    //   .setAttribute("id", " offer-expire-text");
    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < z.length; i++) {
      g[i].classList.add("offer-expire-text");
    }

    // document.getElementById("offer-expire-text-inner").innerHTML = "Finish";
    var d = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < z.length; i++) {
      d[i].innerHTML = "Finish";
    }


    // document.getElementById("offer-blur").style.filter = "blur(2px)";
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(2px)";
    }
  }
}, 1000);

// ........................
$(".tt").tooltip("show");
$(".po").popover("show");
$(".tot").toast("show");
