import { headerImg, menuWrapper } from "./components/menuNodes";
import simpleParallax from 'simple-parallax-js';

new simpleParallax(headerImg, {
    delay: 1,
});

const menu = [menuWrapper];

export default menu;