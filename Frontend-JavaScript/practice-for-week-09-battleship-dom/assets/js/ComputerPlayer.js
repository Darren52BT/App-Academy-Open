import Board from "./board.js";

export default class ComputerPlayer {
  constructor() {
    this.board = new Board();
    //stores valid moves
    this.validMoves = [];

    //put in all the moves
    for (let row in this.board.grid) {
      for (let col in this.board.grid[row]) {
        this.validMoves.push([row, col]);
      }
    }
  }

  makeMove() {
    //if valid moves exists
    //choose a random index in the valid moves and make that move
    //remove it
    //return result of move and coords of move
    if (this.validMoves.length > 0) {
      let randomIndex = Math.floor(Math.random() * this.validMoves.length);
      let coord = this.validMoves[randomIndex];
      this.validMoves.splice(randomIndex, 1);
      let row = coord[0];
      let col = coord[1];
      let result = this.board.makeHit(row, col);
      return { result: result, coord: [row, col] };
    }
  }

  hasWon() {
    return this.board.isGameOver();
  }
}
