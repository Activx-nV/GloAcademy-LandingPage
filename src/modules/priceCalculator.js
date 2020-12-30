const priceCalculator = (price = 100) => {
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const totalValue = document.getElementById('total');

    calcSquare.addEventListener('input', event => {
        const target = event.target;
        if (calcSquare.value !== '') {
            if (target.matches('.calc-square') && calcSquare.value[calcSquare.value.length - 1].match(/^[0-9]/)) {
                calcSquare.value = target.value;
            } else {
                calcSquare.value = calcSquare.value.substr(0, calcSquare.value.length - 1);
            }
        }
    });

    calcCount.addEventListener('input', event => {
        const target = event.target;
        if (calcCount.value !== '') {
            if (target.matches('.calc-count') && calcCount.value[calcCount.value.length - 1].match(/^[0-9]/)) {
                calcCount.value = target.value;
            } else {
                calcCount.value = calcCount.value.substr(0, calcCount.value.length - 1);
            }
        }
    });

    calcDay.addEventListener('input', event => {
        const target = event.target;
        if (calcDay.value !== '') {
            if (target.matches('.calc-day') && calcDay.value[calcDay.value.length - 1].match(/^[0-9]/)) {
                calcDay.value = target.value;
            } else {
                calcDay.value = calcDay.value.substr(0, calcDay.value.length - 1);
            }
        }
    });

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;

        const typeValue = +calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }
        totalValue.textContent = total;
    };

    calcBlock.addEventListener('change', event => {
        const target = event.target;
        if (target.matches('.calc-type') || target.matches('.calc-square') ||
            target.matches('.calc-day') || target.matches('.calc-count')) {
            countSum(price);
        }
    });
};

export default priceCalculator;
