const swiper = new Swiper('.image-slider', {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
  //spaceBetween: 10,
  //   autoplay: {
  //     delay: 1000,
  //     disableOnInteraction: false,
  //stopOnLastSlide: false,

  //   },
  //speed: 1500,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    770: {
      slidesPerView: 2.8,
      //spaceBetween: 30,
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
  },
});
