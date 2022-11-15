import { makeElement, body } from "../../../utilities/utils";
import { mainElement } from "./elementData";

const mainContainer = (() => {
    const main = makeElement(mainElement);

    const remove = () => main.remove();
    const attach = () => body.appendChild(main);
    const append = (...nodes) => nodes.forEach(node => main.appendChild(node));

    return { remove, attach, append };
})();

export default mainContainer;