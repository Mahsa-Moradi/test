$('.tt').tooltip('show');
$('.po').popover('show');
$('.tot').toast('show');
var countDownDate = new Date('Jan 5 , 2021 15:37:25').getTime();

var X = setInterval(function(){
    var now = new Date() .getTime();

    var distance = countDownDate - now;


var  day = Math.floor(distance / (1000 * 60 * 60* 24));
var  hours = Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var  mintutes = Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60));
var  seconds = Math.floor(distance % (1000 * 60 )) / 1000);

Document.getElenentById('demo').innerHTML = '<span id = "day">'+ day + '</span>' + '<span id = "hours">'+ hours + '</span>'  +  '<span id = "mintutes">'+ mintutes + '</span>' + '<span id = "mintutes">'+ seconds + '</span>'; 


if (distance < 0) {
    clearInterval(X);
    Document.getElenentById('demo').innerHTML = Finish
}

} , 1000 );