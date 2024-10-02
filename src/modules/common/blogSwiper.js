import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', async () => {
  
const blogSwiper = new Swiper(".blogSwiper", {
    preloadSlides: 1,
    lazy:true,
    lazyPreloadPrevNext:1,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
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
