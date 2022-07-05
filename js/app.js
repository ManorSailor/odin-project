// Get the canvas
const canvas = document.querySelector('.canvas');

// Get the slider
const slider = document.querySelector('.canvas-slider > #slider'); 

// Get the default grid value from the slider
// let oldGrid = canvas.style.cssText.slice(-3, -1); // Typical way to do the same thing, fetch default value from the inline style on canvas
let oldGrid = slider.getAttribute('value');

// Note: oldGrid is a string. All arithmetical ops except '+' will convert the string to a number--provided the string is a valid no
oldGrid *= oldGrid;

// Generate a square grid of the default size
createGrids(oldGrid);

// Listen to changes on slider. 
// Note: 'change' only listens to changes, i.e, if the user simply click on the slider. This listener won't be triggered, use 'input' for that
slider.addEventListener('change', (e) => {
    const curValue = e.target.value; // New value user wants their grid to be
    const newGrid = curValue * curValue; // Calculate the total elements current grid will have
    
    // Clear the grid of filled grid boxes
    clearGrid();

    if (newGrid > oldGrid) {
        const newValue = (newGrid - oldGrid);
        createGrids(newValue);
    } else if (newGrid < oldGrid) {
        const newValue = (oldGrid - newGrid);
        removeGrids(newValue);
    }

    oldGrid = newGrid; // Update oldGrid value to newGrid, we need to store the last grid value to be able to decide
    slider.setAttribute('value', curValue); // Update slider to reflect current value
    canvas.style.cssText = `--grid-size: ${curValue};` // Update inline style with the current value
});

// Function which generates a grid of size 'size' on canvas
function createGrids(size) {
    for (let i = 0; i < size; i++) {
        const grid = document.createElement('div');
        canvas.appendChild(grid);
    }
}

// Function which removes boxes of size 'size' from the grid
function removeGrids(size) {
    const boxes = [...canvas.children];

    for (let i = 0; i < size; i++) {
        canvas.removeChild(boxes[i]);
    }
}

/* =================== Tools & Colors =================== */
const tools = document.querySelectorAll('.tools-list > *:not(:last-child)');

/* ========== Store currently active function ========== */
let activeFunction;

/* ========== Default Active Tool ========== */
let activeTool = 'pen';

// Listen for clicks on each tool & update activeTool to the clicked tool
[...tools].forEach(tool => {
    tool.addEventListener('click', (e) => {
        activeTool = e.target.id;
    });
});

/* ============ Color Picker ============ */

// Get the color picker
const picker = document.getElementById('picker');

// Store the current color
let currentColor = picker.getAttribute('value');

// Apply listener to the picker to track color changes
picker.addEventListener('change', (e) => {
    currentColor = e.target.value;
});

/* ============ Canvas ============ */

// Index of boxes which have been filled
let boxes = new Set();

// Listen to click events on canvas
canvas.addEventListener('mousedown', (e) => {
    switch (activeTool) {
        case 'pen':
            activeFunction = fillColor(e);
            canvas.addEventListener('mousemove', fillColor);
            break;

        case 'eraser':
            activeFunction = eraser(e);
            canvas.addEventListener('mousemove', eraser);
            break;
    
        default:
            break;
    }
});

canvas.addEventListener('mouseup', () => {
    canvas.removeEventListener('mousemove', activeFunction);
});

// Function to change the background color of passed target
function fillColor(e) {
    boxes.add(e.target);
    e.target.style.backgroundColor = currentColor;
    return fillColor;
}

// Eraser function which just erases stuff off of the grid
function eraser(e) {
    boxes.delete(e.target);
    e.target.removeAttribute('style');
    return eraser;
}

// Function which clears the grid
function clearGrid() {
    // If the boxes are empty, no grid box has been filled, simply return
    if (boxes.length === 0) return;

    // otherwise, for each box, change their backgroundColor to transparent
    boxes.forEach(box => {
        box.style.backgroundColor = 'transparent';
    });
    
    // Clear the boxes set after running it once
    boxes.clear();
}