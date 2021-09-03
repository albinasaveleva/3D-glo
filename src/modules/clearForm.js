const clearForm = (form) => {
    let inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
};
export default clearForm;