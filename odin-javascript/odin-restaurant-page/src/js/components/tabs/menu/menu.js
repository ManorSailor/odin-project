import { headerImg, menuWrapper, MainDishes, Desserts, Drinks, menuListContainer, btnNodes as tabsBtnNodes, menuOl as tabsContainer, btnNodes } from "./components/menuNodes";
import simpleParallax from 'simple-parallax-js';
import { makeSetActiveHandler } from "../../../utilities/utils";

// Set main dishes as the default active tab
let setActiveTab = makeSetActiveHandler(btnNodes[0]);
setActiveTab(btnNodes[0]);

new simpleParallax(headerImg, {
    delay: 1,
});

const menuList = (() => {
    const clear  = () => [...menuListContainer.children].forEach(child => child.remove());
    const append = (...nodes) => nodes.forEach(node => menuListContainer.appendChild(node));

    return { clear, append };
})();

// Listen for clicks on each of the tabs li nodes
tabsContainer.addEventListener('click', (e) => {
    const element = e.target;

    if (tabsBtnNodes.includes(element)) {
        tabsHandler(element.getAttribute('data-id'));
        setActiveTab(element);
    }
});

function tabsHandler(activeTab) {
    if (activeTab === 'Main Dishes') {
        renderTab(MainDishes);
    } else if (activeTab === 'Desserts') {
        renderTab(Desserts);
    } else {
        renderTab(Drinks);
    }
}

function renderTab(tab) {
    menuList.clear();
    menuList.append(...tab);
}

const menu = [menuWrapper];

export default menu;