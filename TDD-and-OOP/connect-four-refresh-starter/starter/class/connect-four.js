const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid =
      [[' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ']]
    //stores the bottom of each col's corresponding row
    this.bottomsOfColumns = [5, 5, 5, 5, 5, 5,5];
    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);
    Screen.addCommand('a', "Move Left Command", this.cursor.left.bind(this.cursor));
    Screen.addCommand('d', "Move Right Command", this.cursor.right.bind(this.cursor));
    Screen.addCommand('x', 'Choose Column Command', this.makeMove.bind(this))
    this.cursor.setBackgroundColor();
    Screen.setMessage("Player turn: " + this.playerTurn);
    Screen.render();
  }



  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    //boolean for if there is empty space
    let isThereEmpty = false;
    //look at grid in 4x4 chunks, 

    //i == top row of each chunk, move chunk down each row
    for (let i = 0; i < grid.length - 3; i++) {
      //k == starting column of each chunk, move chunk down each column
      for (let k = 0; k < grid[0].length - 3; k++) {
        //move through each row in the chunk
        for (let j = i; j < i + 4; j++) {
          //look for an empty space, if there is that means no tie
          if (!isThereEmpty && grid[j].slice(k, k + 4).indexOf(' ') !== -1) {
            isThereEmpty = true;
          }
          //check for match in row, return matching element if there's a nonempty match
          let rowResult = ConnectFour.compareFour(...grid[j].slice(k, k + 4));
          if (rowResult !== null) {
            return rowResult;
          }
        }
        //move through each column in chunk
        for (let m = k; m < k + 4; m++) {
          //check for match in col, return matching element if there's a nonempty match
          let columnResult = ConnectFour.compareFour(grid[i][m], grid[i + 1][m], grid[i + 2][m], grid[i + 3][m]);
          if (columnResult !== null) {
            return columnResult;
          }
        }
        //look for matches in diagonals of each chunck, return matching element is there is nonempty match
        let diag1 = ConnectFour.compareFour(grid[i][k], grid[i + 1][k + 1], grid[i + 2][k + 2], grid[i + 3][k + 3]);
        if (diag1 !== null) {
          return diag1;
        }
        let diag2 = ConnectFour.compareFour(grid[i][k + 3], grid[i + 1][k + 2], grid[i + 2][k + 1], grid[i + 3][k]);
        if (diag2 !== null) {
          return diag2;
        }

      }
    }
    //if there is an empty space, the game is still going
    if (isThereEmpty) {
      return false;
    }
    //if there are no empty spaces and matches, it must be a tie
    return 'T';
  }

  static compareFour(cell1, cell2, cell3, cell4) {
    //if the four cells match and the matching element isn't empty, return the element
    if (cell1 !== ' ' && cell1 === cell2 && cell2 === cell3 && cell3 === cell4) {
      return cell1;
    }
    //return null if empty match or no matches
    return null;
  }
  makeMove() {
    //if this columns hasn't been filled up yet
    if (this.bottomsOfColumns[this.cursor.col] > -1) {
      //make move at the col's bottom
      Screen.setGrid(this.bottomsOfColumns[this.cursor.col], this.cursor.col, this.playerTurn)
      //style background and text accordingly to playerturn
      if (this.playerTurn === 'O') {
        Screen.setTextColor(this.bottomsOfColumns[this.cursor.col], this.cursor.col, 'white');
        Screen.setBackgroundColor(this.bottomsOfColumns[this.cursor.col], this.cursor.col, 'blue');
        this.playerTurn = 'X';
      } else {
        Screen.setTextColor(this.bottomsOfColumns[this.cursor.col], this.cursor.col, 'green')
        Screen.setBackgroundColor(this.bottomsOfColumns[this.cursor.col], this.cursor.col, 'red');
        this.playerTurn = 'O';
      }
       Screen.setMessage("Player turn: " + this.playerTurn);
      //update this column's bottom
      this.bottomsOfColumns[this.cursor.col]--;   

      let checkIfEnd = ConnectFour.checkWin(Screen.grid);
      console.log(checkIfEnd);
      if (checkIfEnd) {
        ConnectFour.endGame(checkIfEnd);
      }
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

module.exports = ConnectFour;
