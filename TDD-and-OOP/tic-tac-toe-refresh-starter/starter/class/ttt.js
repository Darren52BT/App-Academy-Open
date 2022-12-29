const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);
    this.cursor.setBackgroundColor();
    Screen.addCommand('w', 'up command', this.cursor.up.bind(this.cursor));
    Screen.addCommand('s', 'down command', this.cursor.down.bind(this.cursor));
    Screen.addCommand('a', 'left command', this.cursor.left.bind(this.cursor));
    Screen.addCommand('d', 'right command', this.cursor.right.bind(this.cursor));
    Screen.addCommand('x', 'Make Move Command', this.makeMove.bind(this));

    Screen.render();
  }


  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    let isThereEmpty = false;
    for (let i = 0; i < 3; i++) {
      //check for an empty space, which would mean the game isn't over
      //once one is found, we stop checking for an empty space
      if (!isThereEmpty && grid[i].indexOf(' ') !== -1) {
        isThereEmpty = true;
      }
      //check if the row or col at index i has a match
      let resultOfRow = this.checkForMatch(grid[i][0], grid[i][1], grid[i][2]);
      let resultOfCol = this.checkForMatch(grid[0][i], grid[1][i], grid[2][i]);
      //if there is a match in the row and the match is not made up of empty spaces
      if (resultOfRow !== null) {
        return resultOfRow;
      }
      //if there is a match in the col and the match is not made up of empty spaces
      if (resultOfCol !== null) {
        return resultOfCol;
      }
    }
    //now check diagonals for matches
    let firstDiag = this.checkForMatch(grid[0][0], grid[1][1], grid[2][2]);
    let secondDiag = this.checkForMatch(grid[2][0], grid[1][1], grid[0][2]);
    //if firstDiag has a match and isn't made up of empty spaces
    if (firstDiag !== null) {
      return firstDiag;
    }
    //if secondDiag has a match and isn't made up of empty spaces
    if (secondDiag !== null) {
      return secondDiag;
    }
    //if there are no matches and there are empty spaces
    if (isThereEmpty) {
      return false;
    }

    //if there are no more empty spaces and no matches, return tie
    return 'T';

  }
  //if all the cells match and isn't empty, return the match
  //otherwise, return null
  static checkForMatch(cell1, cell2, cell3) {
    if (cell1 !== ' ' && cell1 === cell2 && cell2 === cell3) {
      return cell1;
    }
    return null;
  }

makeMove(){
  if(Screen.grid[this.cursor.row][this.cursor.col] !== ' '){
    return;
  }

  Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);

  if(this.playerTurn === "O"){
    Screen.setTextColor(this.cursor.row, this.cursor.col, 'blue');
    this.playerTurn = "X";
  } else{
    Screen.setTextColor(this.cursor.row, this.cursor.col, 'red');
    this.playerTurn ="O";
  }

  //after each move, checks for game status
  let result = TTT.checkWin(Screen.grid);
  //if result isn't false, meaning there is a winner or tie, end game
  if(result){
    TTT.endGame(result);
  }
}




  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
