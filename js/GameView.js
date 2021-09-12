export default class GameView {
    constructor() {

    }

    updateGrid(game) {
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();

        for(let i = 0; i < game.grid.length; i++) {
            const tile = document.querySelector(`.grid-tile[data-index='${i}']`)
            let playerType = game.grid[i] == 'X' ? 'x-type' : 'o-type';

            tile.classList.remove('player-winner');

            tile.innerHTML = `<span class='${playerType}'>${game.grid[i] ? game.grid[i] : ''}</span>`;

            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add('player-winner');
            } 
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector('.player-X');
        let playerO = document.querySelector('.player-O');
        
        if(game.turn === 'X') {
            playerO.classList.remove('active');
            playerX.classList.add('active');
        } else {
            playerX.classList.remove('active');
            playerO.classList.add('active');
        }
    }
}