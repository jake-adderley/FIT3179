var map_image = document.getElementById("map_img");
var slider = document.getElementById("t_slider");
var sliderOut = document.getElementById("slider_note");
slider.addEventListener("click",slider.addEventListener("mousemove",sliderUpdate))


function sliderUpdate(){
    // this was going to be used for something else too but i changed my mind :P
    sliderOut.innerHTML=slider.value;
    return;
}