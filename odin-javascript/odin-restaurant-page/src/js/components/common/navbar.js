import { body, makeSetActiveHandler } from "../../utilities/utils";
import { navNode, linkNodes } from "./navbar/navNodes";

// Set home as the default active tab
const setActiveTab = makeSetActiveHandler(linkNodes[0]);
setActiveTab(linkNodes[0]);

function init(callback) {
    if (!callback || typeof (callback) !== 'function') {
        throw 'Callback is not a function. Make sure you pass in a function'
    }

    // Using an arrow func bcz linkHandler need access to another argument besides event
    navNode.addEventListener('click', (e) => linksHandler(e, callback));

    body.appendChild(navNode);
}

function linksHandler(e, callback) {
    const element = e.target;
    
    if (linkNodes.includes(element)) {
        setActiveTab(element);
    } else if (element.id === 'restaurant') {
        setActiveTab(linkNodes[0]);
    }

    callback(element.getAttribute('data-id'));
}

const navbar = {
    'init': init,
}

export default navbar;