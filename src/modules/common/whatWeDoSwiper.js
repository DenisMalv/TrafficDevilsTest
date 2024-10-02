import Swiper from 'swiper/bundle';


document.addEventListener('DOMContentLoaded', async () => {

const whatWeDoSwiper = new Swiper(".whatWeDoSwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween:20,
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

})
