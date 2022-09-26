/* ========= Imports ========= */
import * as utils from './utils/utils.js'

/* ========= Global Variables ========= */
const body = document.body;

// Modal
function makeModal(txt='', btnTxt='') {

}

const modal = utils.createElement('section', '', ['intro-modal']);

const text = utils.createElement('p', "Let's Play The Classic Game of Tic-tac-toe!", ['intro-text']);

const btn = utils.createElement('button', 'Start Game!', ['btn']);

modal.appendChild(text);
modal.appendChild(btn);
body.appendChild(modal);