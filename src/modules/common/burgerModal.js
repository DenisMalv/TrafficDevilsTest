import refsCommon from "./refsCommon";


const {burgerBtn, burgerModal, burgerNavList, MODAL_ACTIVE, DROPDOWN_ACTIVE, burgerLangDropdown } = refsCommon;


const toggleBurger = (e,close=false)=>{
    const iconOpen = burgerBtn.querySelector('.js-burger-open')
    const iconClose = burgerBtn.querySelector('.js-burger-close')

    burgerModal.style.display = 'flex';


    iconOpen.classList.toggle('btn-hide')
    iconClose.classList.toggle('btn-hide')

    if(close){
        burgerModal.classList.remove(MODAL_ACTIVE)
        burgerLangDropdown.classList.remove(DROPDOWN_ACTIVE)
        return
    }

    burgerModal.classList.toggle(MODAL_ACTIVE)
    burgerLangDropdown.classList.remove(DROPDOWN_ACTIVE)
}

const onClickBurgerLink = (e)=>{

    toggleBurger(e,close)
}

const onClickOutsideBurger = (e)=>{
    if(e.target === burgerModal && burgerModal.classList.contains(MODAL_ACTIVE)) {
        toggleBurger(e,close)
    }
}


burgerBtn.addEventListener('mousedown',toggleBurger)
burgerNavList.addEventListener('mousedown',onClickBurgerLink)
burgerModal.addEventListener('mousedown',onClickOutsideBurger)





