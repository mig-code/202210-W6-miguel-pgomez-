import {
    createBoard,
    getNextBoard,
    addBorderCells,
} from './helpers/functions.js';
import { renderBoard } from './helpers/domFunctions.js';
import {
    emptyBoard,
    smileBoard,
    isdiBoard,
    figureBoard,
} from './helpers/boards.js';

// Config section
const columns = 28;
const rows = 28;
const intervalTime = 400;
let startInterval = null;
let board = smileBoard;

// DOM elements
const btnStart = document.querySelector('.btn--start');
btnStart.addEventListener('click', () => {
    startInterval = setInterval(startSimulation, intervalTime);
    btnStart.disabled = true;
});
const btnStop = document.querySelector('.btn--stop');
btnStop.addEventListener('click', () => {
    clearInterval(startInterval);
    btnStart.disabled = false;
});
const btnReset = document.querySelector('.btn--reset');
btnReset.addEventListener('click', () => {
    clearInterval(startInterval);
    btnStart.disabled = false;
    board = smileBoard;
    renderBoard(board);
});
const btnSmile = document.querySelector('.btn--smile');
btnSmile.addEventListener('click', () => {
    board = smileBoard;
    renderBoard(board);
});
const btnIsdi = document.querySelector('.btn--isdi');
btnIsdi.addEventListener('click', () => {
    board = isdiBoard;
    renderBoard(board);
});

const btnFigure = document.querySelector('.btn--figure');
btnFigure.addEventListener('click', () => {
    board = figureBoard;
    renderBoard(board);
});
const btnRandom = document.querySelector('.btn--random');
btnRandom.addEventListener('click', () => {
    board = createBoard(columns, rows);
    renderBoard(board);
});
const btnDraw = document.querySelector('.btn--draw');
btnDraw.addEventListener('click', () => {
    clearInterval(startInterval);
    btnStart.disabled = false;
    board = emptyBoard;
    renderBoard(board);
});

// On load
window.onload = () => {
    renderBoard(board);
};

function startSimulation() {
    renderBoard(board);
    addBorderCells(board);
    board = getNextBoard(board);
}
