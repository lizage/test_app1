const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const images = [
    'img/abstract-abstract-art-abstract-painting-935786.jpg',
    'img/abstract-art-artificial-1061581.jpg',
    'img/background-close-up-color-796620.jpg',
    'img/boardwalk-buildings-cars-5256.jpg'
]

function classTogglr(target,class1,class2) { 
  $(target).classList.toggle(class1);
  $(target).classList.toggle(class2);
}

function placeImages() {
    cards_arr = $$('.card__img');
    for(let i=0; i<images.length; i++) {
        cards_arr[i].style.backgroundImage = "url('" + images[i] + "')";

    }
}

function init() {
    
    // load images from array
    placeImages();

    // menu toggler
    $('.topbar__menu_toggle').addEventListener("click", (e) => {
        classTogglr('.topbar__menu','menu_closed','menu_open');
        classTogglr('#menu_button','fa-bars','fa-arrow-left');
        classTogglr('.overlay','overlay_closed','overlay_open');
      });

}

document.addEventListener("DOMContentLoaded", (event) => {
    init();
});