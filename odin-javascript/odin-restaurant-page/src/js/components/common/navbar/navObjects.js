const liObjs = [];
const anchorObjs = [];
const buttonObjs = [];

const linksHref = ['#home', 'menu', '#contact'];
const linksText = ['Home', 'Menu', 'Contact'];

const headerObj = {
    'type': 'header',
    'attr': {
        'class': 'fixed left-0 right-0 flex items-center justify-between py-2 px-8',
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
        'href': '#home',
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

    const buttonObj = {
        'type': 'button',
        'attr': {
            'class': 'py-2 px-4',
        },
    }

    const anchorObj = {
        'type': 'a',
        'textContent': linkText,
        'attr': {
            'class': '',
            'href': linksHref[index],
        },
    }

    liObjs.push(liObj);
    buttonObjs.push(buttonObj);
    anchorObjs.push(anchorObj);
});

export {
    headerObj,
    h3Obj,
    anchorObj,
    navObj,
    ulObj,
    liObjs,
    buttonObjs,
    anchorObjs,
}