const countTimer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor(timeRemaining / 60) % 60,
            hours = Math.floor(timeRemaining / 60 / 60);
        return { timeRemaining, hours, seconds, minutes };
    };
    const upDateClock = () => {
        const timer = getTimeRemaining();
        const formatDate = (value, elem) => {
            if (value.toString().charAt(1) === '') {
                elem.textContent = `0${value}`;
                return elem.textContent;
            } 
            elem.textContent = value;
            return elem.textContent;
        };

        if (timer.timeRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        } else {
            formatDate(timer.hours, timerHours);
            formatDate(timer.minutes, timerMinutes);
            formatDate(timer.seconds, timerSeconds);
        }

};
    upDateClock();
    setInterval(upDateClock, 1000);
};

export default countTimer;