import Board from "./board.js";

export default class HumanPlayer {
  constructor() {
    this.board = new Board();
    //stores valid moves
    this.validMoves = new Set();

    //put in all the moves
    for (let row in this.board.grid) {
      for (let col in this.board.grid[row]) {
        this.validMoves.add(`${[row, col]}`);
      }
    }
  }

  //checks move is valid
  isValid(row, col) {
    //look for move in valid moves
    let valid = this.validMoves.has(`${[row, col]}`);

    return valid;
  }

  //makes move and returns result
  makeMove(row, col) {
    this.validMoves.delete(`${[row, col]}`);
    return this.board.makeHit(row, col);
  }

  hasWon() {
    return this.board.isGameOver();
  }
}
