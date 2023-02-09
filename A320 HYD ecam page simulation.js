var something = document.getElementById('Green_pressure_value')
const clock = () => {
    var hours = document.getElementById('hours')
    var minutes = document.getElementById('minutes')
    
    var h = new Date().getHours() - 1
    var m = new Date().getMinutes();

    h= (h < 10) ? "0" + h : h
    m= (m < 10) ? "0" + m : m


    hours.innerHTML = h;
    minutes.innerHTML = m;
}
var interval = setInterval(clock, 1);






document.getElementById("on").onclick = function(){
    var up = true;
var value = 0;
var increment = 50;
var ceiling = 2950;
function PerformCalc() {
  if (up == true && value <= ceiling) {
    value += increment
      } 
 
 document.getElementById('Green_pressure_value').innerHTML = value + '<br />';
 
 if (value == ceiling) {
    up = false;
    
}


}

setInterval(PerformCalc, 100);
var stop = setInterval(PerformCalc, 100);
clearInterval(stop)


setTimeout(function() { 
    $( "#inside_green_square_off" ).hide();
}, 50);
setTimeout(function() { 
    $( "#green_lo" ).show();
}, 100);
setTimeout(function() { 
    $( "#green_lo" ).hide();
}, 1000);
setTimeout(function() { 
    $( "#inside_green_square" ).show();
}, 1050);

setTimeout(function() { 
    document.getElementById("green_square-2").style.stroke = "#00dd3e";
}, 1050);

setTimeout(function() { 
    document.getElementById("Between_Green_square_and_Green_top").style.fill = "#00dd3e";
}, 1050);
  
setTimeout(function() { 
    document.getElementById("Green_pressure_value").style.fill = "#00dd3e";
}, 1550);

setTimeout(function() { 
    document.getElementById("GREEN").style.fill = "#f0f0f0";
}, 1550);

setTimeout(function() { 
    document.getElementById("Green_top_arrow").style.stroke = "#00dd3e";
}, 1550);

var counter = 2950;
var inc = +50;
setTimeout(function() {
    setInterval(function(){
if(counter == 3000) inc = -50;
if(counter == 2950) inc = +50;
counter+= inc;
$('#Green_pressure_value').html(counter);
}, 1000)}, 4000)


}







