var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000
  },
  loop: true,
  keyboard: {
    enabled: true
  },
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});