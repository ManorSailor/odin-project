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

        showEquation(eq);
        if (numbers.length === 2) {
            console.log(operate(operator, numbers));
            return;
        } else if (!isNaN(eq)) {
            num += eq
        } else if (isNaN(eq) && num !== '') {
            operator = eq;
            numbers.push(parseFloat(num));
            num = '';
        }
        // console.log(num);
        // console.log(numbers);
    });
});

// Function which displays the currentEquation on screen
function showEquation(newItem) {
    // Get the currentEquation trimming any trailing whitespace from it.
    // Need to remove it otherwise we will have whitespace on accessing last element of the string. 
    let curEquation = equation.textContent.trim();

    // If the curEquation is empty & passed item is an operator, return
    // Because, we don't want to allow any operator when there are no nums on screen
    if (curEquation === '' && isNaN(newItem)) return;
    
    // If the newItem is NOT an operator, show it on screen
    if (!isNaN(newItem)) {
        equation.textContent += newItem;
    } else if (isNaN(newItem)) {
        const lastIndex = curEquation.length - 1;
        const lastItem = curEquation[lastIndex];

        // lastItem is an Operator & last operator (lastItem) is NOT the same as newItem.
        // Because we want to allow users to replace their last operator.
        const isDiffOpr = isNaN(lastItem) && lastItem !== newItem;
        
        // If operators are different, means that user wants to change their operator
        if (isDiffOpr) {
            // Slice the string just before lastItem. String don't have pop(). Thus, slice it is.
            // Why? Don't want to convert it into an array & don't care about the last item
            curEquation = curEquation.slice(0, lastIndex);

            // Append the new Operator with a trailing whitespace which trim() removed above
            // Because without the whitespace, our equations will look like this: 28 +36
            curEquation += newItem + ' ';

            // Finally update the equation on screen
            equation.textContent = curEquation;
        } 
        // If lastItem is a number, we can simply append the passed operator to screen. Yay!
        else if (!isNaN(lastItem)) {
            equation.textContent += ' ' + newItem + ' ';
        }
    }
}

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