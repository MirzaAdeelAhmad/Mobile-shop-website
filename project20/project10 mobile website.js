
let circle = document.querySelector(".circle");
let upbtn = document.querySelector("#upbtn");
let downbtn = document.querySelector("#downbtn");

let rotateValue = circle.style.transform;

upbtn.onclick = function(){
    let sumValue = rotateValue + "rotate(-90deg)";
    circle.style.transform = sumValue;
    rotateValue = sumValue;
}
downbtn.onclick = function(){
    let sumValue = rotateValue + "rotate(90deg)";
    circle.style.transform = sumValue;
    rotateValue = sumValue;
}