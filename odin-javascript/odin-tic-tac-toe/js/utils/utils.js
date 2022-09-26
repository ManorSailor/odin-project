export function createElement(type, text = '', classes = []) {
    // Create the passed element
    const element = document.createElement(type);

    // Attach text to the element
    element.textContent = text;

    // Attach classes to element
    classes.forEach(item => element.classList.add(item));

    // Return the element
    return element;
}