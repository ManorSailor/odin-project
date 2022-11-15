import { makeElement } from "../../../utilities/utils";
import { headerObj, h3Obj, navObj, ulObj, liObjs } from "./navObjects";

const header = makeElement(headerObj);
const h3 = makeElement(h3Obj);
const nav = makeElement(navObj);
const ul = makeElement(ulObj);
const li = [];

for (const liObj of liObjs) {
    li.push(makeElement(liObj));
}

export {
    header,
    h3,
    nav,
    ul,
    li,
}