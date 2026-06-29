// ===== VELNOX Loader =====

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.opacity = "0";

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},800);

},2500);

});


// ===== Countdown =====

const launchDate = new Date("January 1, 2027 00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = launchDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

const seconds = Math.floor((distance % (1000*60))/1000);

document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;

},1000);


// ===== Notify Button =====

const btn = document.querySelector(".newsletter button");

btn.onclick = function(){

const email = document.querySelector(".newsletter input").value;

if(email==""){

alert("Please enter your email");

}else{

alert("Thank You ❤️\nWe'll notify you soon.");

}

}
