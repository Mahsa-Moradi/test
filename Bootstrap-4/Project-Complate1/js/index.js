
var countDownDate = new Date('May 5 , 2022 15:37:25').getTime();

var X = setInterval(function(){
    var now = new Date().getTime();

    var distance = countDownDate - now;


var  days = Math.floor(distance / (1000 * 60 * 60 * 24));
var  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var  seconds = Math.floor((distance % (1000 * 60 )) / 1000);

document.getElementById("demo").innerHTML = '<span id = "day">'+ days + '</span>' + '<span id = "hours">'+ hours + '</span>'  +  '<span id = "minutes">'+ minutes + '</span>' + '<span id = "seconds">'+ seconds + '</span>'; 


if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = Finish
}

} , 1000);




// ........................
$('.tt').tooltip('show');
$('.po').popover('show');
$('.tot').toast('show');