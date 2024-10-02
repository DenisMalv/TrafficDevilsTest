import 'aos/dist/aos.css'; // You can also use <link> for styles

document.addEventListener('DOMContentLoaded', async () => {

const { default: AOS } = await import('aos');
AOS.init();

})