import { makeElement } from "../../../utilities/utils";
import { headerObj, h3Obj, navObj, ulObj, liObjs } from "./navObjects";

// Convert Objects into DOM Nodes
const header = makeElement(headerObj);
const h3 = makeElement(h3Obj);
const nav = makeElement(navObj);
const ul = makeElement(ulObj);
liObjs.forEach(liObj => {
    const li = makeElement(liObj);
    ul.appendChild(li);
});

// Append each node to make a navbar
nav.appendChild(ul);
header.append(h3, nav);

export {
    header as navNode,
}