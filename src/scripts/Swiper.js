export const trending__swiper = new Swiper('.trending__swiper', {
  slidesPerView: 2,
  spaceBetween: 32,

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    }
  }
});

export const reviews__swiper = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  spaceBetween: 1,
});

