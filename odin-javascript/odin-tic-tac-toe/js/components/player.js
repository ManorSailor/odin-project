/* ========= Imports ========= */
import { main, stateController } from "../utils/utils.js";

const section = document.createElement('section');
section.classList.add('player-board');
main.appendChild(section);

function view(name, score) {
    // Initialize DOM Nodes
    const nameView  = document.createElement('p');
    nameView.classList.add('name');
    nameView.textContent = name;

    const scoreView = document.createElement('span');
    scoreView.classList.add('score');
    scoreView.textContent = score;

    nameView.appendChild(scoreView);
    section.appendChild(nameView);

    // Modifiers/Setters
    const updateScore = (val) => scoreView.textContent = val;
    const clearScore  = () => scoreView.textContent = 0;
    const setState    = (classList) => stateController.setState(nameView, classList);
    const removeState = (classList) => stateController.removeState(nameView, classList);

    return { updateScore, clearScore, setState, removeState };
}

function model() {
    // Private variables
    let score = 0;
    const myCells = [];

    // Accessors/Getters
    const getScore = () => score;
    const getCells = () => (myCells.length >= 3) ? myCells : null;

    // Modifiers/Setters
    const clearScore = () => score = 0;
    const incrementScore = () => score++;
    const addCell = (cell) => myCells.push(cell);

    return { getScore, incrementScore, clearScore, getCells, addCell };
}

export function player(name, gameSign) {
    // Initialize model & view for each player
    const playerView = view(name, 0);
    const playerModel = model();

    const incrementScore = () => {
        playerModel.incrementScore();
        const score = playerModel.getScore();
        playerView.updateScore(score);
    }

    const clearScore = () => {
        playerView.clearScore();
        playerModel.clearScore();
    }

    return { name, gameSign, incrementScore, 'getCells': playerModel.getCells, 'addCell': playerModel.addCell, 'setState': playerView.setState, 'removeState': playerView.removeState };
}