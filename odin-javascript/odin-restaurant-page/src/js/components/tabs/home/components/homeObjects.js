import bgImg from '../../../../../assets/home-bg.jpg'
import aboutOne from '../../../../../assets/about-1.jpg'
import aboutTwo from '../../../../../assets/about-2.jpg'

const homeWrapperObj = {
    'type': 'section',
    'attr': {
        'id': 'homeTab',
        'class': 'grow',
    }
}

const heroWrapperObj = {
    'type': 'div',
    'attr': {
        'class': 'relative min-h-full flex items-center',
    }
}

const bgImgObj = {
    'type': 'img',
    'attr': {
        'class': 'absolute top-0 left-0 w-full h-full z-[-2] object-cover',
        'src': bgImg,
        'alt': 'main background image',
    }
}

const overlayObj = {
    'type': 'div',
    'attr': {
        'class': 'absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[-1]',
    }
}

const heroContainerObj = {
    'type': 'div',
    'attr': {
        'class': 'container max-auto max-w-50% flex flex-col items-center justify-center gap-2',
    }
}

const heroTaglineObj = {
    'type': 'span',
    'textContent': 'Top Services & Premium Cuisine',
    'attr': {
        'class': 'text-base italic',
    }
}

const heroPreTitleObj = {
    'type': 'p',
    'textContent': 'Welcome to Restabook',
    'attr': {
        'class': 'text-4xl',
    }
}

const heroTitleObj = {
    'type': 'h1',
    'textContent': 'Restaurant',
    'attr': {
        'class': 'text-4xl',
    }
}

const aboutContainerObj = {
    'type': 'div',
    'attr': {
        'class': 'bg-main w-screen max-h-full flex justify-between items-center p-4 py-8 gap-8',
    }
}

const aboutTextContainerObj = {
    'type': 'div',
    'attr': {
        'class': 'w-[50%]',
    }
}

const aboutOurStoryObj = {
    'type': 'p',
    'textContent': 'Our Story',
    'attr': {
        'class': 'text-sm italic text-accent',
    }
}

const aboutIntroObj = {
    'type': 'p',
    'textContent': 'Few words about us',
    'attr': {
        'class': 'text-2xl',
    }
}

const aboutTextContentObj = {
    'type': 'p',
    'textContent': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit esse aliquid, asperiores omnis voluptas cum corporis, quia dicta vitae numquam itaque fugiat aliquam! Doloremque necessitatibus facere, esse voluptate temporibus illum!',
    'attr': {
        'class': 'text-md mt-2 leading-relaxed',
    }
}

const aboutImgContainerObj = {
    'type': 'div',
    'attr': {
        'class': 'grow grid grid-cols-3 items-center justify-items-center',
    }
}

const aboutImgOneObj = {
    'type': 'img',
    'attr': {
        'class': 'max-w-[400px] max-h-[100%] bg-cover bg-center col-start-1 col-end-3 row-start-1 z-10',
        'src': aboutOne,
        'alt': 'Dish 1 image',
    }
}

const aboutImgTwoObj = {
    'type': 'img',
    'attr': {
        'class': 'max-w-[400px] max-h-[100%] bg-cover bg-center col-start-2 col-end-4 row-start-1',
        'src': aboutTwo,
        'alt': 'Dish 2 image',
    }
}

export {
    homeWrapperObj,
    heroWrapperObj,
    bgImgObj,
    overlayObj,
    heroContainerObj,
    heroTaglineObj,
    heroPreTitleObj,
    heroTitleObj,
    aboutContainerObj,
    aboutTextContainerObj,
    aboutOurStoryObj,
    aboutIntroObj,
    aboutTextContentObj,
    aboutImgContainerObj,
    aboutImgOneObj,
    aboutImgTwoObj,
}