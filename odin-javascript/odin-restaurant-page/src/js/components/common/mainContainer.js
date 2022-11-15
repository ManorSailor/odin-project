import { body } from "../../utilities/utils";
import { mainContainer as main } from "./mainContainer/mainContainerComponent";

const mainContainer = (() => {
    const remove = () => main.remove();
    const attach = () => body.appendChild(main);
    const append = (...nodes) => nodes.forEach(node => main.appendChild(node));

    return { remove, attach, append };
})();

export default mainContainer;