export function renderBoard(board) {
    const parentdiv = document.getElementById('grid');
    parentdiv.innerHTML = '';
    for (let i = 1; i < board.length - 1; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        parentdiv.appendChild(row);
        for (let j = 1; j < board[i].length - 1; j++) {
            const childdiv = document.createElement('div');
            childdiv.className = 'cell';
            if (board[i][j] === 1) {
                childdiv.innerText = '🦠';
                childdiv.classList.add('cell--alive');
            }
            if(board[i][j] === 0) {
                childdiv.classList.add('cell--dead');
            }

            row.appendChild(childdiv);
        }
    }
    return parentdiv;
}
