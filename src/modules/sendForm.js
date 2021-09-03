// import checkEmptyInputs from './checkEmptyInputs';
import clearForm from './clearForm';

const sendForm = () => {
    const errorMessage = 'Упс...Что-то пошло не так',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся',
        preloader = document.createElement('section'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status-message');

    preloader.insertAdjacentHTML('beforeend', `
        <div class="sk-three-bounce">
            <div class="sk-bounce-1 sk-child"></div>
            <div class="sk-bounce-2 sk-child"></div>
            <div class="sk-bounce-3 sk-child"></div>
        </div>
    `);
    statusMessage.style.color = 'white';

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
    const forms = document.querySelectorAll('form');
    // forms.forEach(form => {
    //     form.querySelectorAll('input').forEach( input => {
    //         input.addEventListener('input', () => setTimeout(() => checkEmptyInputs(form), 500));
    //         input.addEventListener('blur', () => setTimeout(() => checkEmptyInputs(form), 500));
    //     });
    // });
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let formInputs = form.querySelectorAll('input'),
                formButton = form.querySelector('.form-btn'),
                emptyInput = false;
            formInputs.forEach(input => {
                if (!input.value.trim()) {
                    emptyInput = true;
                }
            });
            if (!emptyInput) {
                formInputs.forEach(input => {
                    if (input.value) {
                        input.style.border = '';
                    }
                });
                // formButton.disabled = false;
                form.append(statusMessage);
                statusMessage.textContent = '';
                statusMessage.append(preloader);
    
                const formData = new FormData(form);
                let body = {};
                formData.forEach((value, key) => {
                    body[key] = value;
                });
                
                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        statusMessage.textContent = successMessage;
                    })
                    .catch((error) => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
                clearForm(form);
                setTimeout(()=> formButton.disabled = false, 1500);
            } else {
                // formButton.disabled = true;
                formInputs.forEach(input => {
                    if (!input.value) {
                        input.style.border = '1px solid red';
                    }
                });
            }
        });
    });
};
export default sendForm;