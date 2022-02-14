
var countDownDate = new Date('february 14 , 2023 14:09:11').getTime();

var X = setInterval(function(){
    var now = new Date().getTime();

    var distance = countDownDate - now;


var  days = Math.floor(distance / (1000 * 60 * 60 * 24));
var  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var  seconds = Math.floor((distance % (1000 * 60 )) / 1000);

document.getElementById("demo").innerHTML = '<span id = "day">'+ days + '</span>' + '<span id = "hours">'+ hours + '</span>'  +  '<span id = "minutes">'+ minutes + '</span>' + '<span id = "seconds">'+ seconds + '</span>'; 

// distance = time count-down < 0 va -0  "Finish" namayesh bedeh.
if (distance < 0) {
    clearInterval(x);
    // خالی باشه تا عدد منفی نخوره
    document.getElementById("demo").innerHTML = "";
    document.getElementById("after-expire").setAttribute("id"," offer-expire-text") 
    document.getElementById("offer-expire-text-innner").innerHTML = "Finish";
    document.getElementById("offer-blur").style.filter = "blur(2px)";
}

} , 1000);




// ........................
$('.tt').tooltip('show');
$('.po').popover('show');
$('.tot').toast('show');