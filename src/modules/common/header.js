import refsCommon from './refsCommon'

const {headerDropdownList, headerlangBtn, headerLangDropdown, headerLangBtnText,
        burgerDropdownList, burgerlangBtn, burgerLangDropdown, burgerLangBtnText, DROPDOWN_ACTIVE } = refsCommon


document.addEventListener('DOMContentLoaded', async () => {

const toggleDropdown = (e,close = false) =>{
    // if(close){
    //     headerLangDropdown.classList.remove(DROPDOWN_ACTIVE)
    //     return
    // }
    if(headerLangDropdown.classList.contains(DROPDOWN_ACTIVE)){
        headerLangDropdown.classList.remove(DROPDOWN_ACTIVE)
        return
    }
    headerLangDropdown.classList.toggle(DROPDOWN_ACTIVE)

}

const onChangeLang = (e) =>{
    if(e.target.nodeName !== "LI"){
        return
    }

    headerLangBtnText.textContent = e.target.dataset.value 
    toggleDropdown(e)
}

const clickOutsideHeaderDropdown = (e)=>{
    if(headerLangDropdown.classList.contains(DROPDOWN_ACTIVE)){

        if(!headerLangDropdown.contains(e.target) ){
            headerLangDropdown.classList.remove(DROPDOWN_ACTIVE)
        }
    }
    
}


headerlangBtn.addEventListener('mousedown', toggleDropdown)
headerDropdownList.addEventListener('click', onChangeLang)
document.addEventListener('mousedown',clickOutsideHeaderDropdown)

// burger clone logic..


const toggleDropdownBurger = (e,close = false) =>{

    if(burgerLangDropdown.classList.contains(DROPDOWN_ACTIVE)){
        burgerLangDropdown.classList.remove(DROPDOWN_ACTIVE)
        return
    }
    burgerLangDropdown.classList.toggle(DROPDOWN_ACTIVE)
    
}

const onChangeLangBurger = (e) =>{
    if(e.target.nodeName !== "LI"){
        return
    }

    burgerLangBtnText.textContent = e.target.dataset.value 
    toggleDropdownBurger(e)
}

const clickOutsideHeaderDropdownBurger = (e)=>{
    if(burgerLangDropdown.classList.contains(DROPDOWN_ACTIVE)){

        if(!burgerLangDropdown.contains(e.target) ){
            burgerLangDropdown.classList.remove(DROPDOWN_ACTIVE)
        }
    }
    
}


burgerlangBtn.addEventListener('mousedown', toggleDropdownBurger)
burgerDropdownList.addEventListener('click', onChangeLangBurger)
document.addEventListener('mousedown',clickOutsideHeaderDropdownBurger)

})