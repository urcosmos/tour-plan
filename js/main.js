$(document).ready(function () {

  AOS.init();

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
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    var body = $('body');
    modal.addClass('modal--visible');
    body.addClass('body-overflow');
    setTimeout(function () {
      modalOverlay.addClass('modal__overlay--visible');
      modalDialog.addClass('modal__dialog--visible');
    }, 10);
  }

  function closeModal(event) {
    event.preventDefault();
    var modal = $('.modal');
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    var body = $('body');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    body.removeClass('body-overflow');
    setTimeout(function () {
      modal.removeClass('modal--visible');
    }, 500);
  }

  $(document).on('keyup', function (evt) {
    if (evt.keyCode == 27) {
      var modal = $('.modal');
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      var body = $('body');
      body.removeClass('body-overflow');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
      setTimeout(function () {
        modal.removeClass('modal--visible');
      }, 500);
    }
  });

  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name should be more than 2 characters"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: "Please specify your phone number"
      }
    });
  });

  $('.newsletter-subscribe').validate({
    errorClass: "invalid-subscribe",
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });

  $('.input--phone-masked').each(function () {
    $(this).mask('+7 (000) 000-00-00');
  });

});