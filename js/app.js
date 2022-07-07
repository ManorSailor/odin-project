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
    canvas.setAttribute('data-grids', curValue); // Update the data-grids attr to reflect current value
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

// Variable for storing the active callback function
let activeFunction;

// Get the default active tool & add class of active to it
let activeTool = document.getElementById('pen');
activeTool.classList.toggle('active');

// Listen for clicks on each tool & update activeTool to the clicked tool
// TODO: Improve this code. This is not an extendable implementation
[...tools].forEach(tool => {
    tool.addEventListener('click', (e) => {
        if (e.target.id === 'pen' || e.target.id === 'eraser') {
            activeTool.classList.toggle('active');
            activeTool = e.target;
            activeTool.classList.toggle('active');
        } else {
            clearGrid();
        }
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

// For each event...add the event to canvas. On mousedown. activate the selected tool. On mouseup, remove the mousemove listener from canvas
['mousedown', 'mouseup'].forEach(eve => {
    canvas.addEventListener(eve, (e) => {
        if (e.type === 'mousedown') {
            activateTool(e);
        } else if (e.type === 'mouseup') {
            canvas.removeEventListener('mousemove', activeFunction);
        }
    });
});

// Function which activates the selected tool. This was we can keep adding tools to our app by adding extra cases
// We call the func once because we want to allow the user to click & fill/erase depending on the tool
// Storing the called func in a variable so that we can pass it later to the removeEventListener func
function activateTool(e) {
    let currentTool = activeTool.id;
    switch (currentTool) {
        case 'pen':
            activeFunction = fillColor(e);
            canvas.addEventListener('mousemove', fillColor);
            break;

        case 'eraser':
            activeFunction = eraser(e);
            canvas.addEventListener('mousemove', eraser);
            break;

        // TODO: Add more tools here
        
        default:
            break;
    }
}

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

    // Otherwise, for each box, remove their style attribute
    boxes.forEach(box => {
        box.removeAttribute('style');
    });
    
    // Clear the boxes set after running it once
    boxes.clear();
}