import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', async () => {
const reviewSwiper = new Swiper(".reviewsSwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    preloadSlides: 2,
    lazy:true,
    lazyPreloadPrevNext:2,
    autoHeight:true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        // grid: {
        //   rows: 2,
        // },
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        slidesPerGroup:2,
        spaceBetween: 20,
        autoHeight:true,
        // grid: {
        //   rows: 1,
        // },
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2,
        slidesPerGroup:2,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>'+'/'+'<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

})
