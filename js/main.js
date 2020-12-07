$(document).ready(function () {

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

  var menuButton = $('.menu-button');

  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
    $('body').toggleClass('body-overflow');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modal = $('.modal');
    var body = $('body');
    modal.addClass('modal--visible');
    body.addClass('body-overflow');
  }

  function closeModal(event) {
    event.preventDefault();
    var modal = $('.modal');
    var body = $('body');
    modal.removeClass('modal--visible');
    body.removeClass('body-overflow');
  }

  $(document).on('keyup', function (evt) {
    if (evt.keyCode == 27) {
      var modal = $('.modal');
      var body = $('body');
      modal.removeClass('modal--visible');
      body.removeClass('body-overflow');
    }
  });


});