import TechnicalFunctions from "../../technicalFunctions/TechnicalFunctions";
import IMask from 'imask'

class Form{
    sendForm() {
        const form = document.getElementById('questionForm');
        const container = document.getElementById('formContainer')

        form.addEventListener('submit', formSend);

        async function formSend(event){
            event.preventDefault();

            let error = formValidate();

            let formData = new FormData(form);

            if(error == 0) {
                container.classList.add('_sending');
                form.reset();
                setTimeout(() => {
                    let response = fetch('sendmail.php', { // await
                        method: 'POST',
                        body: formData,
                    });
                    if(response.ok) {
                        let result = response.json(); // await
                        alert(result.message);
                        form.reset();
                        container.classList.remove('_sending');
                    } else {
                        alert('Ошибка отправки данных на сервер')
                        container.classList.remove('_sending')
                    };
                },1000);
            } else {
                alert('Заполните обязательные поля');
            };
        };

        function formValidate() {
            let error = 0;
            let formReq = document.querySelectorAll('._secondForm__req');
            for(let i = 0; i< formReq.length; i++) {
                let input = formReq[i];
                TechnicalFunctions.formRemoveError(input);
                if(input.value == '') {
                    formAddError(input);
                    error++;
                };
            };
            return error;
        };
            
        function formAddError(input) {
            input.classList.add('_error')
            if(input.placeholder == 'Имя' || input.placeholder == 'Введите имя') {
                input.placeholder = 'Введите имя';
            } else if (input.placeholder == 'Телефон' || input.placeholder == 'Введите номер телефона') {
                input.placeholder = 'Введите номер телефона';
            }
        }
        TechnicalFunctions.addListenerForDataInput();
    };
    maskForPhone() {
        const phoneInputs = document.querySelectorAll('.form__input_phone')
        for( let input of phoneInputs) {
            if(input) {
                this.mask = new IMask(input, {
                     mask: "+{7}(000) 000-00-00"
                });
            };
        }
    };
};

export default new Form()