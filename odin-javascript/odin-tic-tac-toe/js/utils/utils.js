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