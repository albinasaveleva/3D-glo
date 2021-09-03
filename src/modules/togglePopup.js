import clearForm from './clearForm';

const togglePopup = () => {
    const popup = document.querySelector('.popup'),
    popupContent = document.querySelector('.popup-content'),
    popupButtons = document.querySelectorAll('.popup-btn'),
    popupForm = popup.querySelector('form');

    let opacityCount = 0,
        animatePopupOpenInterval;
    popupContent.style.opacity = '0';
    popup.style.opacity = '0';

    const animatePopupOpen = () => {
        animatePopupOpenInterval = requestAnimationFrame(animatePopupOpen);
        if (opacityCount < 1) {
            opacityCount += 0.025;
            popup.style.opacity = opacityCount;
            popupContent.style.opacity = opacityCount;
        } else {
            cancelAnimationFrame(animatePopupOpenInterval);
        }
    };

    const handlerPopup = () => {
        if (!popup.style.display || popup.style.display === 'none') {
            animatePopupOpenInterval = requestAnimationFrame(animatePopupOpen);
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
            popupContent.style.opacity = '0';
            popup.style.opacity = '0';
            opacityCount = 0;
        }
    };

    popupButtons.forEach((popupButton => popupButton.addEventListener('click', handlerPopup)));
    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.matches('.popup-close')) {
            handlerPopup();
            clearForm(popupForm);
            setTimeout(()=> popupForm.querySelector('.form-btn').disabled = false, 500);
            if (popupForm.querySelector('.status-message')) {
                popupForm.querySelector('.status-message').remove();
            }
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                handlerPopup();
                clearForm(popupForm);
                setTimeout(()=> popupForm.querySelector('.form-btn').disabled = false, 500);
                if (popupForm.querySelector('.status-message')) {
                    popupForm.querySelector('.status-message').remove();
                }
            }
        }
    });
};
export default togglePopup;