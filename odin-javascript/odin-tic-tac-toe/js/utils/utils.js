/* ========= Selectors ========= */
export const main = document.querySelector('.game-container');

/* ========= Game Props ========= */
export const GRID_SIZE = 9;
export const winningPaths = [];

/* ========= Utilities ========= */
function createElement([type, text = '', classes = []]) {
    // Create the passed element
    const element = document.createElement(type);

    // Attach text to the element
    element.textContent = text;

    // Attach classes to element
    classes.forEach(item => element.classList.add(item));

    // Return the element
    return element;
}

const generatePaths = (() => {
    /*
        0, 1, 2
        3, 4, 5  <--- Grid
        6, 7, 8

        Horizontal      Change:  Left-To-Right: +1;  Right-To-Left: -1;
        Vertical        Change:  Top-To-Bottom: +3;  Bottom-To-Top: -3;
        Diagonal  Change(Left):  Top-To-Bottom: +4;  Bottom-To-Top: -4;
        Diagonal Change(Right):  Top-To-Bottom: +2;  Bottom-To-Top: -2;
    */
    // Generate Grid
    const Grid = [];
    let row = [];
    for (let i = 0; i < GRID_SIZE; i++) {
        row.push(i.toString());
        if (row.length === 3) {
            Grid.push(row);
            row = [];
        }
    }
    
    // Generate Horizontal Paths
    for (let row of Grid) {
        winningPaths.push(row);
    }

    // Generate Vertical Paths
    let vertical = [];

    for (let i = 0; i < Grid.length; i++) {
        for (let j = 0; j < Grid.length; j++) {
            vertical.push(Grid[j][i]);
        }
        if (vertical.length === 3) {
            winningPaths.push(vertical);
            vertical = [];
        }
    }

    // Generate Diagonal Left Paths
    const diagonalLeft = [];

    for (let i = 0; i < Grid.length; i++) {
        for (let j = i; j <= i; j++) {
            diagonalLeft.push(Grid[i][j]);
        }
        if (diagonalLeft.length === 3) {
            winningPaths.push(diagonalLeft);
        }
    }

    // Generate Diagonal Right Paths
    const diagonalRight = [];

    for (let i = 0; i < Grid.length; i++) {
        for (let j = Grid[i].length - 1 - i; j >= 0; j--) {
            diagonalRight.push(Grid[i][j]);
            break;
        }
        if (diagonalRight.length === 3) {
            winningPaths.push(diagonalRight);
        }
    }
})();

function parseObject(obj) {
    let arr = [];
    let parentNode = arguments[1];
    let element;

    for (let prop in obj) {
        if (obj[prop] !== 'childNodes') {
            arr.push(obj[prop]);
        }

        if (prop === 'childNodes' && obj[prop]) {
            element = createElement(arr);
            if (parentNode) {
                parentNode.append(element);
            }
            parentNode = element;

            obj[prop].forEach(o => parseObject(o, parentNode));

            return parentNode;
        } else if (prop === 'childNodes' && !obj[prop]) {
            parentNode.append(createElement(arr));
        }
    }
}

 export function make(obj) {
    return parseObject(obj);
 }