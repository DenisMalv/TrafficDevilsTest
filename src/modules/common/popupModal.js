import refsCommon from "./refsCommon";
import { setCookie, getCookie, deleteCookie } from "./cookie";

const {popupModal,cookieAccept,cookieSettings,cookieReject} = refsCommon

const onClickAccept = () =>{

    // cookie accept logic
    setCookie("cookie_avenga", "accepted", 1); // зберігаємо кукі 1 день

    popupModal.classList.remove('modal-active');
    document.body.style.overflowY = 'auto';
    document.body.parentElement.style.overflowY = 'auto';

}

const onClickReject = () =>{

    // cookie reject logic
    deleteCookie("cookie_avenga");

    popupModal.classList.remove('modal-active');
    document.body.style.overflowY = 'auto';
    document.body.parentElement.style.overflowY = 'auto';
}

const onClickSettings = () =>{

    // cookie settings logic
}


window.onload = function() {
    if (getCookie("cookie_avenga") !== "accepted") {
        popupModal.style.display = 'flex';
       
        document.body.style.overflow = 'hidden';
        document.body.parentElement.style.overflow = 'hidden';
        setTimeout(()=>popupModal.classList.add('modal-active'),4)
        
    }
};


cookieAccept.addEventListener('click',onClickAccept)
cookieReject.addEventListener('mouseup',onClickReject)
cookieSettings.addEventListener('mouseup',onClickSettings)


