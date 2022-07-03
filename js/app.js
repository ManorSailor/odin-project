// Get the canvas
const canvas = document.querySelector('.canvas');

// Get the slider
const slider = document.querySelector('.canvas-slider > #slider'); 

// Get the default grid value from the slider
// let oldValue = canvas.style.cssText.slice(-3, -1); // Typical way to do the same thing, fetch default value from the inline style on canvas
let oldValue = slider.getAttribute('value');

// Generate a square grid of the default size
// Note: oldValue is a string. All arithmetical ops except '+' will convert the string to a number--provided the string is a valid no
createGrid(oldValue * oldValue);

// Listen to changes on slider. 
// Note: 'change' only listens to changes, i.e, if the user simply click on the slider. This listener won't be triggered, use 'input' for that
slider.addEventListener('change', (e) => {
    const curValue = e.target.value; // New value user wants their grid to be
    const newGrid = curValue * curValue; // Calculate the total elements current grid will have
    const oldGrid = oldValue * oldValue; // Calculate the total elements previous grid had

    if (newGrid > oldGrid) {
        const newValue = (newGrid - oldGrid);
        createGrid(newValue);
    } else if (newGrid < oldGrid) {
        const newValue = (oldGrid - newGrid);
        removeBox(newValue);
    }

    oldValue = curValue; // Store the last grid value, we need it to compare to the current value
    slider.setAttribute('value', curValue); // Update slider to reflect current value
    canvas.style.cssText = `--grid-size: ${curValue};` // Update inline style with the current value
});

// Function which generates a grid of size 'size' on canvas
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        canvas.appendChild(grid);
    }
}

// Function which removes boxes of size 'size' from the grid
function removeBox(size) {
    const boxes = [...canvas.children];

    for (let i = 0; i < size; i++) {
        canvas.removeChild(boxes[i]);
    }
}