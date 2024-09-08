import ModalCase from '../components/modal/modalCase/ModalCase.js';
import ModalForm from '../components/modal/modalForm/ModalForm.js';
class TechnicalFunctions {

    
    formRemoveError(input) {
        input.classList.remove('_error');
    }

    addListenerForDataInput() {
        document.addEventListener('click', function(event) {
            let target = event.target;
            if(!target.hasAttribute('data-input')) return;
            target.classList.remove('_error');
        });
    };

    addListenerDataClose() {
        document.addEventListener('click', function(event) {
            let target = event.target;
            if(target.dataset.close) {
                ModalForm.close();
                ModalCase.close();
            };
        });
    };

    addListenerForModalForm() {
        let records = document.querySelectorAll('._order-form');
        for( let record of records) {
            record.addEventListener('click', function() { // запись на бесплатное занятие через главную страницу
                ModalForm.open(); // открытие модального окна
                ModalForm.sendForm();
                document.addEventListener('keydown', function(event) {
                    if(event.code.toLowerCase() == 'escape') {
                        ModalForm.close();
                    };
                });
            });
        };
    };

    addListenerForModalCase() {
        let record = document.querySelector('._watch-case');
        record.addEventListener('click', function() { // запись на бесплатное занятие через главную страницу
            ModalCase.open(); // открытие модального окна
            document.addEventListener('keydown', function(event) {
                if(event.code.toLowerCase() == 'escape') {
                    ModalCase.close();
                };
            });
        });
    };

    smoothNavigation() {
        let menuLinks = document.querySelectorAll('._smooth-link[data-goto]');
        if(menuLinks.length != 0) {
            for(let menuLink of menuLinks) {
                menuLink.addEventListener('click', (event) => {
                    let target = event.target;
                    if(target.dataset.goto && document.querySelector(target.dataset.goto)) {
                        const gotoBlock = document.querySelector(target.dataset.goto);
                        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 100;

                        window.scrollTo({
                            top: gotoBlockValue,
                            behavior: 'smooth'
                        });
                        event.preventDefault();
                    };
                });            
            };
        };
    };
};

export default new TechnicalFunctions();