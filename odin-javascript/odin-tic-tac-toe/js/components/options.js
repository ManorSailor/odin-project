import { main } from "../utils/utils.js";
import { Game } from "./game.js";

const optionsView = (() => {
    /* ===== Private ===== */
    // Initialize DOM Nodes
    const section = document.createElement('section');
    section.classList.add('game-options');

    const gameMode = document.createElement('button');
    gameMode.textContent = '2P'
    gameMode.classList.add('btn');

    const round = document.createElement('p');
    round.textContent = 'Round ';
    round.classList.add('round');

    const roundCount = document.createElement('span');
    roundCount.textContent = 1;
    roundCount.classList.add('round-count');

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.classList.add('btn');

    round.appendChild(roundCount);
    section.append(gameMode, round, resetBtn);
    main.appendChild(section);

    /* ===== Public ===== */
    //Accessors/Getters
    const getResetBtn    = () => resetBtn;
    const getGameModeBtn = () => gameMode;
    const getGameMode    = () => gameMode.textContent;
    
    // Modifiers/Setters
    const setGameMode = (mode) => gameMode.textContent = mode;
    const updateRound = (val) =>  roundCount.textContent = val;

    return { getGameMode, getResetBtn, getGameModeBtn, setGameMode, updateRound };
})();

const optionsModel = (() => {
    let roundCount = 1;

    const finalRound     = () => (roundCount === 5);
    const getRound       = () => roundCount;
    const incrementRound = () => (roundCount + 1 <= 5) ? roundCount++ : roundCount;
    const resetRound     = () => roundCount = 1;

    return { finalRound, getRound, incrementRound, resetRound };
})();

export const options = (() => {
    const switchGameMode = (e) => {
        const mode = e.target.textContent;
        const switchedMode = (mode === '2P') ? '1P' : '2P';
        optionsView.setGameMode(switchedMode);
    }
    // Attach a listener on gameMode btn
    optionsView.getGameModeBtn().addEventListener('click', switchGameMode);

    const resetGame = () => Game.resetGame();
    
    // Attach a listener on resetGame btn
    optionsView.getResetBtn().addEventListener('click', resetGame);

    const incrementRound = () => {
        optionsModel.incrementRound();
        const round = optionsModel.getRound();
        optionsView.updateRound(round);
    }

    const resetRound = () => {
        optionsModel.resetRound();
        const round = optionsModel.getRound();
        optionsView.updateRound(round);
    }

    return { 
        'finalRound': optionsModel.finalRound,
        'incrementRound': incrementRound,
        'resetRound': resetRound,
        'getMode': optionsView.getGameMode,
     }
})();