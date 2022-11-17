import headerImg from '../../../../../assets/menu-header.jpg';
import { MainDishes, Desserts, Drinks } from './menuData';

const menuList = ['Main Dishes', 'Desserts', 'Drinks'];

const menuWrapperObj = {
    'type': 'section',
    'attr': {
        'id': 'menuTab',
        'class': 'grow flex flex-col pb-6',
    }
}

const contentWrapperObj = {
    'type': 'div',
    'attr': {
        'class': 'flex items-center min-h-[50vh] grow',
    }
}

const headerImgObj = {
    'type': 'img',
    'attr': {
        'class': 'absolute top-0 left-0 w-full h-[40%] z-[-2] object-cover',
        'src': headerImg,
        'alt': 'main header image',
    }
}

const overlayObj = {
    'type': 'div',
    'attr': {
        'class': 'absolute top-0 left-0 w-full min-h-[40%] bg-black opacity-60 z-[-1]',
    }
}

const textContainerObj = {
    'type': 'div',
    'attr': {
        'class': 'container max-w-50% flex flex-col items-center justify-center gap-2',
    }
}

const introTextObj = {
    'type': 'span',
    'textContent': 'Special menu offers',
    'attr': {
        'class': 'text-lg text-accent italic',
    }
}

const introHeaderObj = {
    'type': 'h1',
    'textContent': 'Discover our menu',
    'attr': {
        'class': 'text-4xl',
    }
}
const menuContainerObj = {
    'type': 'div',
    'attr': {
        'class': 'flex flex-col gap-8 grow',
    }
}

const menuHeaderObj = {
    'type': 'div',
    'attr': {
        'class': 'bg-main-alt max-w-[50%] min-w-[340px] mx-auto rounded-md',
    }
}

const menuOlObj = {
    'type': 'ul',
    'attr': {
        'class': 'flex align-center justify-center gap-8'
    }
}

const menuLiObjs = [];
const menuBtnObjs = [];

menuList.forEach(item => {
    const liObj = {
        'type': 'li',
        'attr': {
            'class': 'py-2',
        }
    }

    const btnObj = {
        'type': 'button',
        'textContent': item,
        'attr': {
            'class': 'py-2 px-4 hover:text-accent rounded-md',
            'data-id': item,
        }
    }

    menuLiObjs.push(liObj);
    menuBtnObjs.push(btnObj);
});

const menuItemsContainerObj = {
    'type': 'div',
    'attr': {
        'class': 'bg-main-alt flex items-center justify-center w-full max-w-[60%] min-w-[300px] mx-auto p-8 rounded-md grow',
    }
}

const menuListContainerObj = {
    'type': 'ul',
    'attr': {
        'class': 'grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6'
    }
}

const MainDishesContainerObj = createList(MainDishes);
const DessertsContainerObj = createList(Desserts);
const DrinksContainerObj = createList(Drinks);

function createList(menu) {
    const menuItemsLiObjs = [];
    const menuItemsImgObjs = [];
    const menuItemsTextWrapperObjs = [];
    const menuItemsHeaderObjs = [];
    const menuItemsNameObjs = [];
    const menuItemsPriceObjs = [];
    const menuItemsDescObjs = [];

    menu.forEach(dish => {
        const liObj = {
            'type': 'li',
            'attr': {
                'class': 'flex gap-4 px-6 py-4 cursor-default hover:bg-main rounded-md',
            }
        }

        const imgObj = {
            'type': 'img',
            'attr': {
                'src': 'https://picsum.photos/100',
                'class': 'w-[40px] h-[40px] rounded-full',
                'alt': 'Dish image',
            }
        }

        const textWrapperObj = {
            'type': 'div',
            'attr': {
                'class': '',
            }
        }

        const headerObj = {
            'type': 'header',
            'attr': {
                'class': 'flex justify-between items-center'
            }
        }

        const nameObj = {
            'type': 'h3',
            'textContent': dish.name,
            'attr': {
                'class': 'text-lg',
            }
        }

        const priceObj = {
            'type': 'p',
            'textContent': dish.price,
            'attr': {
                'class': 'text-md text-accent',
            }
        }

        const descObj = {
            'type': 'p',
            'textContent': dish.desc,
            'attr': {
                'class': 'text-xs',
            }
        }

        menuItemsLiObjs.push(liObj);
        menuItemsImgObjs.push(imgObj);
        menuItemsTextWrapperObjs.push(textWrapperObj);
        menuItemsHeaderObjs.push(headerObj);
        menuItemsNameObjs.push(nameObj);
        menuItemsPriceObjs.push(priceObj);
        menuItemsDescObjs.push(descObj);
    });

    return {
        menuItemsLiObjs,
        menuItemsImgObjs,
        menuItemsTextWrapperObjs,
        menuItemsHeaderObjs,
        menuItemsNameObjs,
        menuItemsPriceObjs,
        menuItemsDescObjs
    }
}

export {
    menuWrapperObj,
    contentWrapperObj,
    headerImgObj,
    overlayObj,
    textContainerObj,
    introTextObj,
    introHeaderObj,
    menuContainerObj,
    menuHeaderObj,
    menuOlObj,
    menuLiObjs,
    menuBtnObjs,
    menuItemsContainerObj,
    menuListContainerObj,
    MainDishesContainerObj,
    DessertsContainerObj,
    DrinksContainerObj,
}