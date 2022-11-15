import { body } from "../../utilities/utils";
import { navNode } from "./navbar/navNodes";

const navbar = (() => {
    const nav = navNode;

    const attach = () => body.appendChild(nav);

    return { attach };
})();

export default navbar;