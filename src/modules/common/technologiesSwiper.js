import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', async () => {
  
const options = {
  slidesPerView: 1,
  spaceBetween: 20,
  preloadSlides: 1,
  autoHeight: true,
  lazy:true,
  lazyPreloadPrevNext:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass:"slider-nav__item",
    bulletActiveClass:"active",
    renderBullet: function (index, className) {
      const bulletText = this.slides[index].dataset.name
      return '<span class="' + className + '">' + bulletText + "</span>";
    },
  },
}

const blogSwiper = new Swiper(".technologiesSwiper", options);

})