import { body } from "../../utilities/utils";
import { mainContainer as main } from "./mainContainer/mainContainerNode";

const mainContainer = (() => {
    const clear  = () => [...main.children].forEach(child => child.remove());
    const attach = () => body.appendChild(main);
    const append = (...nodes) => nodes.forEach(node => main.appendChild(node));

    return { clear, attach, append };
})();

export default mainContainer;