export default class GameView {
    constructor() {

    }

    updateGrid(game) {
        for(let i = 0; i < game.grid.length; i++) {
            const tile = document.querySelector(`.grid-tile[data-index='${i}']`);
            tile.textContent = game.grid[i];
        }
    }
}