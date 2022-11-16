import { makeElement } from "../../../../utilities/utils";
import { headerImgObj, contentWrapperObj, menuWrapperObj, overlayObj, textContainerObj, introTextObj, introHeaderObj, menuContainerObj, menuHeaderObj, menuOlObj, menuLiObjs, menuBtnObjs } from "./menuObjects";

const menuWrapper = makeElement(menuWrapperObj);

const contentWrapper = makeElement(contentWrapperObj);
const textContainer = makeElement(textContainerObj);

const headerImg = makeElement(headerImgObj);
const overlay = makeElement(overlayObj);
const introText = makeElement(introTextObj);
const introHeader = makeElement(introHeaderObj);

textContainer.append(introText, introHeader);
contentWrapper.append(headerImg, overlay, textContainer);

// Menu Header
const menuContainer = makeElement(menuContainerObj);

const menuHeader = makeElement(menuHeaderObj);
const menuOl = makeElement(menuOlObj);
const liNodes = [];
menuLiObjs.forEach((liObj, index) => {
    const liNode = makeElement(liObj);
    const btnNode = makeElement(menuBtnObjs[index]);

    liNode.appendChild(btnNode);
    liNodes.push(liNode);
});

menuOl.append(...liNodes);
menuHeader.append(menuOl);

menuContainer.append(menuHeader);

menuWrapper.append(contentWrapper, menuContainer);

export {
    menuWrapper,
    headerImg,
}