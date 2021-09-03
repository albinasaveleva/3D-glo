const checkEmptyInputs = (form) => {
    let formInputs = form.querySelectorAll('input'),
    formButton = form.querySelector('.form-btn');
    if ([...formInputs].every(input => input.value.trim())) {
        formButton.disabled = false;
    } else {
        formButton.disabled = true;
    }
};
export default checkEmptyInputs;