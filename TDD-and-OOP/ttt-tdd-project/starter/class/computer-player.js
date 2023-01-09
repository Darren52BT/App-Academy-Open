const Cursor = require("./cursor")
const TTT = require("./ttt");
class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    //array to store valid moves
    let validMoves = [];
    //iterate through rows
    for (let rows in grid) {
      //iterate throw columns
      for (let cols in grid) {
        //if this current spot is empty
        if (grid[rows][cols] === ' ') {
          //create an object containing the location of this spot, and
          //push it to the array of valid move
          let obj = { row: Number(rows), col: Number(cols) }
          validMoves.push(obj);
        }
      }
    }
    return validMoves;
  }

  static randomMove(grid) {

    //get list of possible moves
    let possibleMoves = ComputerPlayer.getValidMoves(grid);
    // generate a random number to choose the corresponding move
    let randomPosition = Math.floor(Math.random() * possibleMoves.length);
    //return the corresponding move
    return possibleMoves[randomPosition];
  }

  static getWinningMoves(grid, symbol) {

    // Your code here
    //array to store winning moves
    let winningMoves = [];
    //get possible moves
    let validMoves = ComputerPlayer.getValidMoves(grid);
    //iterate through possible moves
    for (let move of validMoves) {
      //check if putting in that move will result with a win
      //if yes, push the move to the array of winning moves
      //create a copy of the grid
      let gridCopy = [];
      for (let row of grid) {
        gridCopy.push(row.slice());
      }
      gridCopy[move.row][move.col] = symbol;
      if (TTT.checkWin(gridCopy) === symbol) {
        winningMoves.push(move);
      }
    }
    return winningMoves;
  }

  static getSmartMove(grid, symbol) {

    // Your code here
    let opposer;
    if (symbol === 'O') {
      opposer = 'X';
    } else {
      opposer = 'O';
    }
    //get list of opposer's winning moves
    let opposerWinningMoves = ComputerPlayer.getWinningMoves(grid, opposer);

    //get list of the current player's moves
    let yourWinningMoves = ComputerPlayer.getWinningMoves(grid, symbol);

    ///if you have a winning move, go for it
    if (yourWinningMoves.length > 0) {
      return yourWinningMoves[0];
    }
    //if you have no winning moves but your opposer does, block their win
    if (opposerWinningMoves.length > 0) {
      return opposerWinningMoves[0];
    }

    let validMoves = ComputerPlayer.getValidMoves(grid);

    let winnerPossibleMoves = [];


    //looks for two move wins, pushes those to possible moves
    for (let move1 of validMoves) {
      let gridCopy = [];
      for (let row of grid) {
        gridCopy.push(row.slice());
      }
      gridCopy[move1.row][move1.col]=opposer;
      let possible2MoveWins = ComputerPlayer.getWinningMoves(gridCopy,opposer);

      for( let ele of possible2MoveWins){
        winnerPossibleMoves.push(move1)
        winnerPossibleMoves.push(ele)
      }

      
    }
    //looks for three move wins, pushes them to possible moves

      for (let move1 of validMoves) {
        let gridCopy = [];
        for (let row of grid) {
          gridCopy.push(row.slice());
        }
        gridCopy[move1.row][move1.col]=opposer;
  
        for (let move2 of validMoves) {
          let gridCopy2 = [];
          for (let row of gridCopy) {
            gridCopy2.push(row.slice());
          }
          gridCopy2[move2.row][move2.col]=opposer;
          let possible3MoveWins = ComputerPlayer.getWinningMoves(gridCopy2,opposer);
          for( let ele of possible3MoveWins){
            winnerPossibleMoves.push(ele)
            winnerPossibleMoves.push(move2);
            winnerPossibleMoves.push(move1);
          }
        }
    


    }
  //looks for the most common move amongst the possible moves, returns that 
    if (winnerPossibleMoves.length > 0) {
      let obj = {};
      for( let move of winnerPossibleMoves){
      
        if(!obj.hasOwnProperty(`${move.row} ${move.col}`))
        {
          obj[`${move.row} ${move.col}`]=1;
        } else{
          obj[`${move.row} ${move.col}`]++;
        }
      }


      let mostCommonMove;
      for (let move in obj){
        if(mostCommonMove === undefined){
          mostCommonMove = move;
        }
        if(obj[mostCommonMove]< obj[move]){
          mostCommonMove=move;
        }
      }
      mostCommonMove = {row: Number(mostCommonMove.substring(0,1)), col: Number(mostCommonMove.substring(1))};
      return mostCommonMove;
    }

    //if there are no winning moves for either side, just go with a random move
    return ComputerPlayer.randomMove(grid);
  }
  //does not succeed in blocking player from winning in every 1000 game run, but does succeed fairly often
  //the number of losses are very low, at the most they're usually 6


}

module.exports = ComputerPlayer;
