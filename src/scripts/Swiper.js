export const trending__swiper = new Swiper('.trending__swiper', {
  slidesPerView: 2,
  spaceBetween: 16, // вместо column-gap!
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    }
  }
  });

// export const reviews__swiper = new Swiper('.reviews__swiper', {
//   slidesPerView: 1,
// });

