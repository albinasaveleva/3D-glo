const handlerCommand = () => {
    const commandWrapper = document.querySelector('#command'),
        commandPhotoes = commandWrapper.querySelectorAll('img');

    const changePhoto = () => {
        commandPhotoes.forEach(photo => {
            let currentSrc;
            photo.addEventListener('mouseover', (event) => {
                currentSrc = event.target.src;
                event.target.src = event.target.dataset.img;
            });
            photo.addEventListener('mouseout', (event) => {
                event.target.src = currentSrc;
            });
        });
    };
    changePhoto();
};
export default handlerCommand;