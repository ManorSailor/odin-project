/* ========= Selectors ========= */
export const main = document.querySelector('.game-container');

/* ========= Game Props ========= */
export const GRID_SIZE = 9;
export const winningPaths = [];

/* ========= Utilities ========= */
// Sleep function to wait for x seconds. Note: Must be used with await/async!
// Thanks to: https://stackoverflow.com/a/39914235
export const sleep = ms => new Promise(r => setTimeout(r, ms));

// Handles updating classes on DOM objects
export const stateController = (() => {
    // Private Methods
    // Following fn returns a new slightly modified fn according to the passed method
    function makeController(method) {
        return function (elements = [], classList = []) {
            if (!Array.isArray(elements)) {
                elements = [elements];
            }
            if (!Array.isArray(classList)) {
                classList = [classList];
            }
            elements.forEach(element => {
                classList.forEach(cls => element.classList[method](cls));
            });
        }
    }

    // Public APIs
    const setState    = makeController('add');
    const removeState = makeController('remove');

    return { setState, removeState };
})();

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