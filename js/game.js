export default class Game {
    constructor() {
        this.grid = new Array(9).fill(null);
        this.turn = "X";
    }

    nextTurn() {
        if(this.turn === "X"){
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    }

    makeMove(index) {

        if(this.endOfGame()) {
            return;
        }

        if(this.grid[index]) {
            return;
        }
        this.grid[index] = this.turn;
        let winningCombination = this.findWinningCombinations();

        if(!winningCombination) {
            this.nextTurn();
        }
    }

    findWinningCombinations() {
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ];

        for(const combination of winningCombinations) {
            const [a,b,c] = combination;
            
            if(this.grid[a] && (this.grid[a] === this.grid[b] && this.grid[a] === this.grid[c])) {
                return combination;
            }
        }
        return null;
    }

    endOfGame() {
        let winningCombination = this.findWinningCombinations();
        if(winningCombination) {
            return true;
        }
        else {
            return false;
        }
    }
}