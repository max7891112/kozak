import Form from "./components/form/Form.js";
import Questions from "./components/questions/Questions.js";
import SecondForm from "./components/secondForm/SecondForm.js";
import TechnicalFunctions from "./technicalFunctions/TechnicalFunctions.js";
document.addEventListener('DOMContentLoaded', () => {
    Form.sendForm();
    Form.maskForPhone()
    SecondForm.sendForm();
    Questions.addListener();
    TechnicalFunctions.addListenerDataClose();
    TechnicalFunctions.addListenerForModalForm();
    TechnicalFunctions.addListenerForModalCase();
    TechnicalFunctions.smoothNavigation();
    new Swiper('.image-slider', {

        navigation: {
            nextEl: '.swiper-button-next-modern',
            prevEl: '.swiper-button-prev-modern'
        },
    
        pagination: {
            el: '.swiper-paginations',
            //буллеты
            clickable: true
        },
        loop: true,
    });
})

