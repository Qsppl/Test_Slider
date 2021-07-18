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

const swiper = new Swiper('.-js-main-slider', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.-js-main-slider-next',
    prevEl: '.-js-main-slider-prev',
  }
});

const swiper1 = new Swiper('.-js-sub-slider', {
  // Optional parameters
  slidesPerView: 1,
  allowTouchMove: false,

  // Navigation arrows
  navigation: {
    nextEl: '.-js-sub-slider-next',
    prevEl: '.-js-sub-slider-prev',
  }
});
