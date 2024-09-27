import Swiper from 'swiper/bundle';


const reviewSwiper = new Swiper(".reviewsSwiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    autoHeight: true,
    spaceBetween: 20,
    preloadSlides: 2,
    lazy:true,
    lazyPreloadPrevNext:2,
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

