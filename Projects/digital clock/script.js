// let hours = document.querySelector(".hours");
// hours.innerHTML.fo
// let mins = document.querySelector(".mins");
// let seconds = document.querySelector(".seconds");


let hrs = document.getElementById("hours");
let mins = document.getElementById("mins");
let sec = document.getElementById("seconds");

setInterval(() => {
    let currentTime = new Date()

    hrs.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

}, 1000)
