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

// Tools default state
let penState = false;

// Listen to click events on canvas
canvas.addEventListener('click', () => {
    // If pen is disabled, enable it & add a mousemove event & pass fillColor as a callback func. Otherwise, remove the mousemove listener
    if (!penState) {
        togglePen();
        canvas.addEventListener('mousemove', fillColor);
    } else {
        togglePen();
        canvas.removeEventListener('mousemove', fillColor);
    }
});

// Function to change the background color of passed target
function fillColor(e) {
    e.target.style.backgroundColor = currentColor;
}

// Function which toggles the pen state
function togglePen() {
    const pen = document.getElementById('pen');
    const state = pen.getAttribute('toggled');

    if (state === 'false') {
        pen.setAttribute('toggled', true);
        penState = true;
    } else {
        pen.setAttribute('toggled', false);
        penState = false;
    }
}