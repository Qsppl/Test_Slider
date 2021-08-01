import SwiperCore, { Navigation, Lazy } from 'swiper/core';
SwiperCore.use([Navigation, Lazy]);

const swiper = new SwiperCore('.-js-main-slider', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.-js-main-slider-next',
    prevEl: '.-js-main-slider-prev',
  }
});

const swiper1 = new SwiperCore('.-js-sub-slider', {
  preloadImages: false,
  lazy: true,
  slidesPerView: 1,
  allowTouchMove: false,

  // Navigation arrows
  navigation: {
    nextEl: '.-js-sub-slider-next',
    prevEl: '.-js-sub-slider-prev',
  }
});
