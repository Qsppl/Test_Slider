// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

import Swiper from 'swiper'
import SwiperCore, { Navigation } from 'swiper/core'
SwiperCore.use([Navigation]);


// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

});

const swiper = new Swiper('.slider1', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
        nextEl: '.next_slider1',
        prevEl: '.prev_slider1',
    }
});

const swiper1 = new Swiper('.slider2', {
    // Optional parameters
    slidesPerView: 1,
    allowTouchMove: false,

    // Navigation arrows
    navigation: {
        nextEl: '.next_slider2',
        prevEl: '.prev_slider2',
    }
});
