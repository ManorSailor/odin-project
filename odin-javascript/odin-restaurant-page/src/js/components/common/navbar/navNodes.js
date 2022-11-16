import { makeElement } from "../../../utilities/utils";
import { headerObj, h3Obj, anchorObj, navObj, ulObj, liObjs, anchorObjs } from "./navObjects";

// Convert Objects into DOM Nodes
const header = makeElement(headerObj);
const h3 = makeElement(h3Obj);
const anchor = makeElement(anchorObj);
const nav = makeElement(navObj);
const ul = makeElement(ulObj);
const aNodes = [];

liObjs.forEach((liObj, index) => {
    const li = makeElement(liObj);
    const anchor = makeElement(anchorObjs[index]);

    li.appendChild(anchor);
    ul.appendChild(li);

    aNodes.push(anchor);
});

// Append each node to make a navbar
h3.appendChild(anchor);
nav.appendChild(ul);
header.append(h3, nav);

export {
    header as navNode,
    aNodes as linkNodes,
}