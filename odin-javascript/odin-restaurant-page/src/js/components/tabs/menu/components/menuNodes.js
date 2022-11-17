import { makeElement } from "../../../../utilities/utils";
import { headerImgObj, contentWrapperObj, menuWrapperObj, overlayObj, textContainerObj, introTextObj, introHeaderObj, menuContainerObj, menuHeaderObj, menuOlObj, menuLiObjs, menuBtnObjs, menuItemsContainerObj, MainDishesContainerObj, DessertsContainerObj, menuListContainerObj, DrinksContainerObj,  } from "./menuObjects";

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

// Menu Items List
const menuItemsContainer = makeElement(menuItemsContainerObj);

// Menu List Container
const menuListContainer = makeElement(menuListContainerObj);

const MainDishes = parseObject(MainDishesContainerObj);
const Desserts = parseObject(DessertsContainerObj);
const Drinks = parseObject(DrinksContainerObj);

// Handles parsing the objects which makes up a menu item
// obj - Object containing arrays of objects
function parseObject(obj) {
    const liNodes = [];
    const textWrapperNodes = [];
    const headerNodes = [];

    for (const key in obj) {
        obj[key].forEach((item, index) => {

            switch (key) {
                case 'menuItemsLiObjs':
                    const liNode = makeElement(item);
                    liNodes.push(liNode);
                    break;
                
                case 'menuItemsImgObjs':
                    const imgNode = makeElement(item);
                    liNodes[index].append(imgNode);
                    break;

                case 'menuItemsTextWrapperObjs':
                    const textWrapperNode = makeElement(item);
                    liNodes[index].append(textWrapperNode);
                    textWrapperNodes.push(textWrapperNode);
                    break;
                
                case 'menuItemsHeaderObjs':
                    const headerNode = makeElement(item);
                    textWrapperNodes[index].append(headerNode);
                    headerNodes.push(headerNode);
                    break;
        
                case 'menuItemsNameObjs':
                    const nameNode = makeElement(item);
                    headerNodes[index].append(nameNode);
                    break;

                case 'menuItemsPriceObjs':
                    const priceNode = makeElement(item);
                    headerNodes[index].append(priceNode);
                    break;

                case 'menuItemsDescObjs':
                    const descNode = makeElement(item);
                    textWrapperNodes[index].append(descNode);
                    break;
                
                default:
                    break;
            }
        });
    }

    return liNodes;
}

// By default, we will show main dishes on the menu page
menuListContainer.append(...MainDishes);

menuItemsContainer.append(menuListContainer);
menuContainer.append(menuHeader, menuItemsContainer);
menuWrapper.append(contentWrapper, menuContainer);

export {
    menuWrapper,
    headerImg,
    menuListContainer,
    MainDishes,
    Desserts,
    Drinks,
}