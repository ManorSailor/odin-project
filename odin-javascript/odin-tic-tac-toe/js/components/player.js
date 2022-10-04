/* ========= Imports ========= */
import { main } from "../utils/utils.js";

const section = document.createElement('section');
section.classList.add('player-board');
main.appendChild(section);

function view(name, score) {
    /* ===== Private ===== */
    // Initialize DOM Nodes
    const nameView  = document.createElement('p');
    nameView.classList.add('name');
    nameView.textContent = name;

    const scoreView = document.createElement('span');
    scoreView.classList.add('score');
    scoreView.textContent = score;

    nameView.appendChild(scoreView);
    section.appendChild(nameView);

    /* ===== Public ===== */
    // Modifiers/Setters
    const updateScore = (val) => scoreView.textContent = val;
    const clearScore  = () => scoreView.textContent = 0;
    const setState    = (classList) => nameView.classList.add(classList);
    const removeState = (classList) => nameView.classList.remove(classList);

    return { updateScore, clearScore, setState, removeState };
}

function model() {
    /* ===== Private ===== */
    let score = 0;
    let myCells = [];

    /* ===== Public ===== */
    // Accessors/Getters
    const getScore = () => score;
    const getCells = () => (myCells.length >= 3) ? myCells : null;

    // Modifiers/Setters
    const clearScore     = () => score = 0;
    const incrementScore = () => score++;
    const addCell        = (cell) => myCells.push(cell);
    const clearCells     = () => myCells = [];

    return { getScore, incrementScore, clearScore, getCells, addCell, clearCells };
}

export function player(name, gameSign) {
    /* ===== Private ===== */
    // Initialize model & view for each player
    const playerView = view(name, 0);
    const playerModel = model();

    /* ===== Public ===== */
    // Modifiers/Setters
    const incrementScore = () => {
        playerModel.incrementScore();
        const score = playerModel.getScore();
        playerView.updateScore(score);
    }

    const clearScore = () => {
        playerView.clearScore();
        playerModel.clearScore();
    }

    const clearCells = () => playerModel.clearCells();

    const resetPlayer = () => {
        clearCells()
        clearScore();
    }

    return { name, gameSign, incrementScore, clearCells, clearScore, resetPlayer, 'getCells': playerModel.getCells, 'addCell': playerModel.addCell, 'setState': playerView.setState, 'removeState': playerView.removeState };
}