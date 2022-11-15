// Reference to body of the page
const body = document.body;

/**
 * Creates & return DOM elements
 * @param {Object} elementProps                     - JS Object, contains info required to make a DOM Node
 * @param {string} elementProps.type                - Element's Type
 * @param {string} [elementProps.textContent]       - Element's textContent
 * @param {Object} [elementProps.attr]              - JS Object, contains element's attributes
 * @param {string} [elementProps.attr.id]           - Element's ID
 * @param {string|Array} [elementProps.attr.class]  - Element's classList
 * @param {*} [elementProps.attr.dataAttr]          - Element's data attributes
 * @returns {Node}
 */
function makeElement(elementProps={}) {
    if (!elementProps.type) throw 'Element\s type is undefined. Make sure you provide an HTML element type'

    const element = document.createElement(elementProps.type);

    if (elementProps.textContent) element.textContent = elementProps.textContent;

    if (elementProps.attr) {
        for (const key in elementProps.attr) {
            element.setAttribute(key, elementProps.attr[key]); // TODO: Write an array/string handler for classList
        }
    }

    return element;
}

export {
    makeElement,
    body
}