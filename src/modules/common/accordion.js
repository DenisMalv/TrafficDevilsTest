import 'accordion-js/dist/accordion.min.css';


document.addEventListener('DOMContentLoaded', async () => {
  const { default: Accordion } = await import('accordion-js');

const accordions = Array.from(document.querySelectorAll('.accordion-container'));
new Accordion(accordions, {
    duration: 400,
    showMultiple: true,
    
    onOpen: function(currentElement) {
      console.log(currentElement);
    }}
);


})