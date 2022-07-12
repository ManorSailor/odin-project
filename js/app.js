/* ============ Constants ============ */
const equation = document.querySelector('.equation > span');
const result = document.querySelector('.result > span');
const buttons = document.querySelectorAll('.btn');

// Array for storing numbers
let num = '';
let operator;
let numbers = [];

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Get the user input
        const eq = e.target.textContent;

        if (eq === 'AC' || eq === 'C') {
            operate(eq);
            return;
        } 
        if (numbers.length === 2) {
            console.log(operate(operator, numbers));
            return;
        } else if (!isNaN(eq)) {
            num += eq
        } else if (isNaN(eq) && num !== '') {
            operator = eq;
            numbers.push(parseInt(num));
            num = '';
        }
        console.log(num);
        console.log(numbers);

        equation.textContent += `${eq}`;
    });
});

// Function for choosing operation type on passed input
function operate(operator, numbers) {
    switch(operator) {
        case '+':
            return add(numbers);
        case '-':
            return subtract(numbers);
        case '*':
            return multiply(numbers);
        case '/':
            return divide(numbers[0], numbers[1]);
        case '%':
            return percent(numbers[0], numbers[1]);
        case 'AC':
            allClear();
            return;
        case 'C':
            clear();
            return;
        default:
            return;
    }
}

function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function subtract(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        result = numbers[i] - numbers[i + 1];
    }
    return result;
}

function multiply(numbers) {
    return numbers.reduce((sum, num) => sum * num, 1);
}

function divide(number, divisor) {
    if (divisor === 0) return `Big Brain Time: ${number} / 0 = ${Infinity}`;
    return Math.floor(number / divisor * 100) / 100; // Limits the number of decimals to 100ths place
}

function percent(percent, number) {
    return percent * number / 100;
}

function allClear() {
    result.textContent = 0;
    equation.textContent = '';
    num = '';
    operator = '';
    numbers = [];
}

function clear() {
    let content = result.textContent;
    
    if (content === '0') return;
    
    const len = content.length;
    
    // If there are more than 1 element, slice it off from first to just before the last element. Otherwise, set the content to 0
    (len > 1) ? content = content.slice(0, len - 1) : content = 0;
    
    // Update the result on screen
    result.textContent = content;
}