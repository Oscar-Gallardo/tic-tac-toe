import Game from './Game.js';
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll('.grid-tile');
tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        onTileClicked(tile.dataset.index);
    });
});

document.querySelector('.restart').addEventListener('click', () => {
    newRestartClicked();
})

function onTileClicked(index) {
    game.makeMove(index);
    gameView.updateGrid(game);
}

function newRestartClicked() {
    game = new Game;
    gameView.updateGrid(game);
}