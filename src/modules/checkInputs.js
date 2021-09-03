import MaskPhone from '../maskPhone';

const checkInputs = () => {
    const checkInput = (item, regExp) => {
        let checkExp = regExp;
        if (checkExp.test(item)) {
            item.value = item.value.replace(checkExp, '');
        }
    };

    const calcInputs = document.querySelectorAll('#calc input');
    calcInputs.forEach( input => {
        input.addEventListener('input', () => checkInput(input, /\D/));
    });

    const requiredInputs = document.querySelectorAll('input[required]');
    requiredInputs.forEach(input => input.removeAttribute('required'));

    const checkFormName = () => {
        const formsName = document.querySelectorAll('.form-name');
        formsName.forEach( input => {
            input.addEventListener('focus', () => input.style.border = '');
            input.addEventListener('input', () => checkInput(input, /[^а-яё ]/i));
            input.addEventListener('blur', (event) => {
                let target = event.target;
                if (target === input) {
                    input.value = input.value
                        .replace(/[^а-яё ]+/i, '')
                        .replace(/ +/, ' ')
                        .replace(/^ | $/, '');
                    if (input.value) {
                        let words = input.value.match(/[а-яё]{2,}/ig);
                        if (words) {
                            if (words.length === 1) {
                                input.value = `${words[0].slice(0, 1)
                                    .toUpperCase()}${words[0]
                                    .slice(1)
                                    .toLowerCase()}`;
                            } else {
                                input.value = `${words[0].slice(0, 1)
                                    .toUpperCase()}${words[0]
                                    .slice(1)
                                    .toLowerCase()} ${words[1].slice(0, 1)
                                    .toUpperCase()}${words[1]
                                    .slice(1)
                                    .toLowerCase()}`;
                            }
                        } else {
                            input.value = input.value.replace(input.value, '');
                        } 
                    }
                }
            });
        });
    };
    checkFormName();

    const checkFormMess = () => {
        const formMess = document.querySelector('.mess');
        formMess.addEventListener('focus', () => formMess.style.border = '');
        formMess.addEventListener('input', () => checkInput(formMess, /[^а-яё0-9 \.\,\-\(\)\:\;\?\!\"]/i));
        formMess.addEventListener('blur', () => {
            formMess.value = formMess.value
                .replace(/[^а-яё0-9 \.\,\-\(\)\:\;\?\!\"]+/i, '')
                .replace(/ +/, ' ')
                .replace(/\.+/, '.')
                .replace(/\,+/, ',')
                .replace(/\-+/, '-')
                .replace(/\(+/, '(')
                .replace(/\)+/, ' )')
                .replace(/:+/, ':')
                .replace(/;+/, ';')
                .replace(/\?+/, '?')
                .replace(/\!+/, '!')
                .replace(/\"+/, '"');
        });
    };
    checkFormMess();

    const checkFormEmail = () => {
        const formsEmail = document.querySelectorAll('.form-email');
        formsEmail.forEach( input => {
            input.addEventListener('focus', () => input.style.border = '');
            input.addEventListener('input', () => checkInput(input, /[^a-z\d\_\-\!\~\'@\.\*]/i));
            input.addEventListener('blur', (event) => {
                let target = event.target;
                if (target === input) {
                    input.value = input.value
                        .replace(/[^a-z\d\_\-\!\~\'@\.\*]+/i, '')
                        .replace(/@+/, "@")
                        .replace(/\.+/, ".");
                }
                if (target === input) {
                    if (!/[a-z\d\_\-\!\~\'\.\*]+@\w+\.\w+$/i.test(input.value)) {
                        input.value = input.value.replace(input.value, '');
                    }}
                }
            );
        });
    };
    checkFormEmail();

    const checkFormPhone = () => {
        const formsPhone = document.querySelectorAll('.form-phone');
        const maskPhone = new MaskPhone({
            selector: '.form-phone',
            masked:  '+7(___)_______'
        });
        maskPhone.start();
        formsPhone.forEach( input => {
            input.addEventListener('focus', () => input.style.border = '');
            input.addEventListener('input', () => checkInput(input, /[^0-9\(\)\+]/));
            input.addEventListener('blur', (event) => {
                let target = event.target;
                if (target === input) {
                    input.value = input.value.replace(/[^0-9\(\)\+]/, '');
                    if (!/^\+7\(\d{3}\)\d{7}$/.test(input.value)) {
                        input.value = input.value.replace(input.value, '');
                    }}
                }
            );
        });
    };
    checkFormPhone();
};
export default checkInputs;