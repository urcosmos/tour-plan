var hotelSlider = new Swiper('.hotel-slider__container', {
  // autoplay: {
  //   delay: 3000
  // },
  loop: true,
  keyboard: {
    enabled: true
  },
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});

var reviewsSlider = new Swiper('.reviews-slider', {
  // autoplay: {
  //   delay: 1000
  // },
  loop: true,
  // keyboard: {
  //   enabled: true
  // },
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

// $('.parallax-window').parallax({
//   imageSrc: '../img/newsletter-bg.jpg'
// });