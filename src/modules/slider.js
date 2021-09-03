const slider = () => {
    const slider = document.querySelector('.portfolio-content'),
        slides = slider.querySelectorAll('.portfolio-item');

    let currentSlide = 0,
        interval;

    const addDots = () => {
        const dotsContainer = document.querySelector('.portfolio-dots');
        slides.forEach((slide, index) => {
            let newDot = document.createElement('li');
            newDot.classList.add('dot');
            if (index === 0) {
                newDot.classList.add('dot-active');
            }
            dotsContainer.append(newDot);
        });
    };
    addDots();
    const dots = slider.querySelectorAll('.dot');

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const autoPlaySlider = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');

    };
    const startSlider = (time = 3000) => {
        interval = setInterval(autoPlaySlider, time);
    };
    const stopSlider = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (!target.matches('.portfolio-btn, .dot')) {
            return;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('.dot')) {
            dots.forEach((dot, index) => {
                if ( dot === target ) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.portfolio-btn, .dot')) {
            stopSlider();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.portfolio-btn, .dot')) {
            startSlider(2000);
        }
    });

    startSlider(2000);
};
export default slider;