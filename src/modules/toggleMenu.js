import scrollIntoView from './scrollIntoView';

const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = (event) => {
        event.preventDefault();
        menu.classList.toggle('active-menu');
    };
    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('menu') || target.closest('.menu')) {
            handlerMenu(event);
        } else if (target.classList.contains('close-btn')) {
            handlerMenu(event);
        } else if (target.tagName.toLowerCase() === 'a' && target.textContent) {
            handlerMenu(event);
        } else if (!target.classList.contains('active-menu') && menu.classList.contains('active-menu')) {
            handlerMenu(event);
        }
    });
    menuItems.forEach((item) => scrollIntoView(item, `#${item.querySelector('a')
        .getAttribute('href')
        .slice(1)}`)
    );
};
export default toggleMenu;