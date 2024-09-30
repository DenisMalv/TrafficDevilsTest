import refsCommon from './refsCommon'

const {headerDropdownList, headerlangBtn, headerLangDropdown, headerLangBtnText} = refsCommon

const DROPDOWN_ACTIVE = 'open'

const toggleDropdown = (e,close = false) =>{
    if(close){
        headerLangDropdown.classList.remove(DROPDOWN_ACTIVE)
        return
    }
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
