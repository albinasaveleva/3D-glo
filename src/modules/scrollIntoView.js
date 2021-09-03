const scrollIntoView = (elem, selector) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(selector)
            .scrollIntoView({behavior: 'smooth', block: 'start'});
    });
};
export default scrollIntoView;