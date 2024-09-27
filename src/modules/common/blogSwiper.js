import Swiper from 'swiper/bundle';


const blogSwiper = new Swiper(".blogSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    preloadSlides: 1,
    lazy:true,
    lazyPreloadPrevNext:1,
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

