const liObjs = [];
const anchorObjs = [];

const linksHref = ['#home', '#menu', '#contact'];
const linksText = ['Home', 'Menu', 'Contact'];

const headerObj = {
    'type': 'header',
    'attr': {
        'class': 'fixed left-0 right-0 flex items-center justify-between py-3 px-8 max-w-6xl mx-auto mt-4 bg-nav-clr shadow-sm rounded-md z-50 backdrop-blur-sm',
    },
}

const h3Obj = {
    'type': 'h3',
    'attr': {
        'class': 'text-xl',
    },
}

const anchorObj = {
    'type': 'a',
    'textContent': 'Restaurant',
    'attr': {
        'id': 'restaurant',
        'href': linksHref[0],
        'class': 'py-2 px-4 hover:text-accent rounded-md hover:text-accent',
        'data-id': linksHref[0],
    },
}

const navObj = {
    'type': 'nav',
    'attr': {
        'class': 'navbar',
    },
}

const ulObj = {
    'type': 'ul',
    'attr': {
        'class': 'flex items-center',
    },
}

linksText.forEach((linkText, index) => {
    const liObj = {
        'type': 'li',
    }

    const anchorObj = {
        'type': 'a',
        'textContent': linkText,
        'attr': {
            'class': 'py-2 px-4 hover:text-accent rounded-md',
            'href': linksHref[index],
            'data-id': linksHref[index],
        },
    }

    liObjs.push(liObj);
    anchorObjs.push(anchorObj);
});

export {
    headerObj,
    h3Obj,
    anchorObj,
    navObj,
    ulObj,
    liObjs,
    anchorObjs,
}