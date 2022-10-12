var map_image = document.getElementById("map_img");
var slider = document.getElementById("t_slider");
var sliderOut = document.getElementById("slider_note");
slider.addEventListener("change",imgChange)

function imgChange(){
    sliderOut.innerHTML=slider.value;
    if (slider.value < 2000){
        map_image.src = 'js/images/aus-precip-1979.png';
    }else{
        map_image.src = 'js/images/aus-precip-2022.png';
    }
    return;
}