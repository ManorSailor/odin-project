import { makeElement } from "../../../utilities/utils";
import { headerObj, h3Obj, anchorObj, navObj, ulObj, liObjs, buttonObjs, anchorObjs } from "./navObjects";

// Convert Objects into DOM Nodes
const header = makeElement(headerObj);
const h3 = makeElement(h3Obj);
const anchor = makeElement(anchorObj);
const nav = makeElement(navObj);
const ul = makeElement(ulObj);

liObjs.forEach((liObj, index) => {
    const li = makeElement(liObj);
    const button = makeElement(buttonObjs[index]);
    const anchor = makeElement(anchorObjs[index]);

    button.appendChild(anchor);
    li.appendChild(button);
    ul.appendChild(li);
});

// Append each node to make a navbar
h3.appendChild(anchor);
nav.appendChild(ul);
header.append(h3, nav);

export {
    header as navNode,
}