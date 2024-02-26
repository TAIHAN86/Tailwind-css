const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});




var cont=0;
function loopSlider(){
  var xx= setInterval(function(){
        switch(cont)
        {
        case 0:{
            $("#slider-1").fadeOut(400);
            $("#slider-2").delay(400).fadeIn(400);
            $("#sButton1").removeClass("bg-purple-800");
            $("#sButton2").addClass("bg-purple-800");
        cont=1;
        
        break;
        }
        case 1:
        {
        
            $("#slider-2").fadeOut(400);
            $("#slider-1").delay(400).fadeIn(400);
            $("#sButton2").removeClass("bg-purple-800");
            $("#sButton1").addClass("bg-purple-800");
           
        cont=0;
        
        break;
        }
        
        
        }},8000);

}

function reinitLoop(time){
clearInterval(xx);
setTimeout(loopSlider(),time);
}



function sliderButton1(){

    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-purple-800");
    $("#sButton1").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=0
    
    }
    
    function sliderButton2(){
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-purple-800");
    $("#sButton2").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=1
    
    }

    $(window).ready(function(){
        $("#slider-2").hide();
        $("#sButton1").addClass("bg-purple-800");
        

        loopSlider();
     
        
    
    
    
    
    });





    const events = document.getElementById("events");

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

events.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - events.offsetLeft;
  startY = e.pageY - events.offsetTop;
  scrollLeft = events.scrollLeft;
  scrollTop = events.scrollTop;
  events.style.cursor = "grabbing";
});

events.addEventListener("mouseleave", () => {
  isDown = false;
  events.style.cursor = "grab";
});

events.addEventListener("mouseup", () => {
  isDown = false;
  events.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - events.offsetLeft;
  const y = e.pageY - events.offsetTop;
  const walkX = (x - startX) * 1;
  const walkY = (y - startY) * 1;
  events.scrollLeft = scrollLeft - walkX;
  events.scrollTop = scrollTop - walkY;
});

const scrollLeftButton = document.getElementById("action-button--previous");
const scrollRightButton = document.getElementById("action-button--next");

scrollLeftButton.addEventListener("click", () => {
  events.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", () => {
  events.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  });
});

events.addEventListener("scroll", (e) => {
  const position = events.scrollLeft;
  if (position === 0) {
    scrollLeftButton.disabled = true;
  } else {
    scrollLeftButton.disabled = false;
  }

  if (Math.round(position) === events.scrollWidth - events.clientWidth) {
    scrollRightButton.disabled = true;
  } else {
    scrollRightButton.disabled = false;
  }
});







