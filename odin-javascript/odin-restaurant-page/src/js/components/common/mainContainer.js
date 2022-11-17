import { body } from "../../utilities/utils";
import { mainContainer as main } from "./mainContainer/mainContainerNode";

const mainContainer = (() => {
    const clear  = () => [...main.children].forEach(child => child.remove());
    const append = (...nodes) => nodes.forEach(node => main.appendChild(node));

    return { clear, append };
})();

body.appendChild(main);

export default mainContainer;