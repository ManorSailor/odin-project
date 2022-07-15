/* ============ Constants ============ */
const equation = document.querySelector('.equation > span');
const result   = document.querySelector('.result > span');
const buttons  = document.querySelectorAll('.btn');

/* ============ Global Variables ============ */
let curNum   = result.textContent;
let operands = [];
let operator = '';
let ans      = '';

// For each button in buttons, assign a click listener
buttons.forEach(button => {
    button.addEventListener('click', performMath);
});

// Function which decides how the program will play out
function performMath(e) {
    const newItem = e.target.textContent;

    // Check if these are special operators, call them & return
    if (newItem === 'AC' || newItem === 'C') {
        operate(newItem);
        return;
    }

    // If its a number, store it. 
    if (!isNaN(newItem)) {
        // If currentNum is 0, OVERWRITE it with newNum. Otherwise, APPEND newNum to it
        // Helps in ignoring multiple 0s without any preceding operands i.e, 000000
        (curNum === '0') ? curNum = newItem : curNum += newItem;
        result.textContent = curNum;
    } else {
        // Check if operator is empty, store the operator. (It will only be empty when running for the 1st time)
        if (operator === '') operator = newItem;
        else if (!curNum) operator = newItem;
        
        // Only push to array if curNum exists
        if (curNum) {
            operands.push(parseFloat(curNum));
            curNum = '';
            // We need a pair of numbers & one operator to perform math
            if (operands.length === 2) {
                ans = operate(operator, operands);
                result.textContent = ans;
                operands = [];
                operands.push(ans);
            }
            // Update the operator at last, because we don't want to forget the original operator
            operator = newItem;
        }
    }
    showEquation(newItem);
}

// Function which displays the currentEquation on screen in realtime
function showEquation(newItem) {
    // Get the currentEquation trimming any trailing whitespace from it.
    // Need to remove it otherwise we will have whitespace on accessing last element of the string. 
    let curEquation = equation.textContent.trim();
    const lastIndex = curEquation.length - 1;
    const lastItem = curEquation[lastIndex];

    // If the curEquation is empty & passed item is an operator, return
    // Because, we don't want to allow any operator when there are no nums on screen
    if (curEquation === '' && isNaN(newItem)) return;
    
    // If there is an answer, append it to the equation And overwrite ans
    if (ans !== '') {
        curEquation += ` = ${ans}`;
        ans = '';
        equation.textContent = curEquation;
    }
    
    // If the newItem is NOT an operator, show it on screen
    if (!isNaN(newItem)) {
        const isSameNum = !isNaN(lastItem) && lastItem === newItem && lastItem !== '0';

        if (isSameNum) {
            curEquation = curEquation.slice(0, lastIndex);
            equation.textContent = curEquation;
        } else {
            equation.textContent += newItem;
        }
    } else {
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
function operate(operator, operands) {
    switch(operator) {
        case '+':
            return add(operands);
        case '-':
            return subtract(operands);
        case '*':
            return multiply(operands);
        case '/':
            return divide(operands[0], operands[1]);
        case '%':
            return percent(operands[0], operands[1]);
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

function add(operands) {
    return operands.reduce((sum, num) => sum + num, 0);
}

function subtract(operands) {
    let result = 0;
    for (let i = 0; i < operands.length - 1; i++) {
        result = operands[i] - operands[i + 1];
    }
    return result;
}

function multiply(operands) {
    return operands.reduce((sum, num) => sum * num, 1);
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
    ans = '';
    curNum = '';
    operator = '';
    operands = [];
}

function clear() {
    let content = result.textContent;
    
    if (content === '0') return;
    
    const len = content.length;
    
    const lastItem = content[len - 1];
    showEquation(lastItem);

    // If there are more than 1 element, slice it off from first to just before the last element. Otherwise, set the content to 0
    (len > 1) ? content = content.slice(0, len - 1) : content = '0';
    
    curNum = content;

    // Update the result on screen
    result.textContent = content;
}