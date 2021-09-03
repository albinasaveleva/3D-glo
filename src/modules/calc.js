const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = calcBlock.querySelector('.calc-type'),
        calcSquare = calcBlock.querySelector('.calc-square'),
        calcCount = calcBlock.querySelector('.calc-count'),
        calcDay = calcBlock.querySelector('.calc-day'),
        calcTotal = calcBlock.querySelector('#total');

    const countSum = () => {
        let total = 0,
            countRooms = 1,
            countDays = 1;
        const typeValue = calcType.value,
            squareValue = parseFloat(calcSquare.value);

        if (calcCount.value) {
            countRooms += (calcCount.value - 1) / 10;
        }
        if (calcDay.value) {
            if (calcDay.value < 5) {
                countDays *= 2; 
            } else if (calcDay.value < 10) {
                countDays *= 1.5;
            }
        }
    
        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countRooms * countDays;
        }

        calcTotal.textContent = Math.round(total);
    };

    calcBlock.addEventListener('change', (event) => {
        let target = event.target;

        if (target.matches('select, input')) {
            countSum();
        }
    });
};

export default calc;