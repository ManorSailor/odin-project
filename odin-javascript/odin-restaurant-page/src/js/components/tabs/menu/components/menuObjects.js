import headerImg from '../../../../../assets/menu-header.jpg'

const menuList = ['Main Dishes', 'Desserts', 'Drinks'];

const menuWrapperObj = {
    'type': 'section',
    'attr': {
        'id': 'menuTab',
        'class': 'grow flex flex-col',
    }
}

const contentWrapperObj = {
    'type': 'div',
    'attr': {
        'class': 'flex items-center grow',
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
        'class': 'absolute top-0 left-0 w-full h-[43.25%] bg-black opacity-60 z-[-1]',
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
        'class': 'grow',
    }
}

const menuHeaderObj = {
    'type': 'div',
    'attr': {
        'class': 'bg-main-alt max-w-[50%] mx-auto rounded-md',
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
        }
    }

    menuLiObjs.push(liObj);
    menuBtnObjs.push(btnObj);
});

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
}