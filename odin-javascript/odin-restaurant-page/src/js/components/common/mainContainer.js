import { makeElement, body } from "../../utilities/utils";

const mainContainer = (() => {
    const attributes = {
        'class': 'container mx-auto min-h-full',
    }

    const main = makeElement('main', '', attributes);
    
    const remove = () => main.remove();
    const attach = () => body.appendChild(main);
    const append = (...nodes) => nodes.forEach(node => main.appendChild(node));

    return { remove, attach, append };
})();

export default mainContainer;