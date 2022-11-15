const liObjs = [];
const liText = ['Home', 'Menu', 'Contact'];

const headerObj = {
    'type': 'header',
    'attr': {
        'class': '',
    },
}

const h3Obj = {
    'type': 'h3',
    'textContent': 'Restaurant',
    'attr': {
        'class': '',
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
        'class': '',
    },
}

for (const text of liText) {
    liObjs.push({
        'type': 'li',
        'textContent': text,
        'attr': {
            'class': '',
        },
    });
}

export {
    headerObj,
    h3Obj,
    navObj,
    ulObj,
    liObjs,
}