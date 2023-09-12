let elSlide = document.querySelector(".slider")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let elBody = document.querySelector(".body")

btn1.addEventListener("click", function() {
  elBody.style.background = ""
  elSlide.style.transform = " translate(0px)"

})

btn2.addEventListener("click", function() {
  elBody.style.background = ""
  elSlide.style.transform = " translate(-600px)"

})

btn3.addEventListener("click", function() {
  elBody.style.background = ""
  elSlide.style.transform = " translate(-1200px)"

})

btn4.addEventListener("click", function() {
  elBody.style.background = ""
  elSlide.style.transform = " translate(-1800px)"

})