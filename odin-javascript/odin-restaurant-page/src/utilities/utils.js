/**
 * Creates & return DOM elements
 * @param {string} type              - Type of element, i.e, div, main etc
 * @param {string} [textContent]     - Element's textContent
 * @param {Object} [attr]            - Object containing element's attributes
 * @param {string} [attr.id]         - Element's ID
 * @param {string[]} [attr.class]    - Element's class list
 * @param {*} [attr.dataAttr]        - Element's data attributes
 * @returns {Node}
 */
function makeElement(type, textContent='', attr={}) {
    const element = document.createElement(type);

    if (textContent) element.textContent = textContent;

    for (const key in attr) {
        element.setAttribute(key, attr[key]);
    }

    return element;
}

export {
    makeElement,
}