export function createElement(type, classes=[]) {
    // Create the passed element
    const element = document.createElement(type);

    // Attach classes to element
    classes.forEach(item => element.classList.add(item));

    // Return the element
    return element;
}