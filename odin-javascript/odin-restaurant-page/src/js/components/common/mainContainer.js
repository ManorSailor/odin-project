import { makeElement, body } from "../../utilities/utils";

const mainContainer = (() => {
    const attributes = {
        'id': 'content',
    }
    
    const main = makeElement('main', '', attributes);
    
    function remove() {
        main.remove();
    }
    
    function attach() {
        body.appendChild(main);
    }
    
    function append(...nodes) {
        nodes.forEach(node => main.appendChild(node));
    }

    return { remove, attach, append };
})();

export default mainContainer;