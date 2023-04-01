function getNeighbors(row, col, matrix) {

  let neighbors = [];
  // Check top
  if (row > 0 && matrix[row - 1][col] > 0) {
    neighbors.push([row - 1, col]);
  }
  // Check top right
  if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1] > 0) {
    neighbors.push([row - 1, col + 1])
  }
  // Check right

  if (col < matrix[row].length - 1 && matrix[row][col + 1] > 0) {
    neighbors.push([row, col + 1])

  }
  // Check bottom right
  if (row < matrix.length - 1 && col < matrix[row].length - 1 && matrix[row + 1][col + 1] > 0) {
    neighbors.push([row + 1, col + 1])

  }
  // Check bottom
  if (row < matrix.length - 1 && matrix[row + 1][col] > 0) {
    neighbors.push([row + 1, col])
  }
  // Check bottom left
  if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1] > 0) {
    neighbors.push([row + 1, col - 1])
  }
  // Check left
  if (col > 0 && matrix[row][col - 1] > 0) {
    neighbors.push([row, col - 1])
  }
  // Check top left
  if (row > 0 && col > 0 && matrix[row - 1][col - 1] > 0) {
    neighbors.push([row - 1, col - 1])
  }
  // Return neighbors
  return neighbors;
  // Your code here
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If an index contains a 1 and has not been visited, 
      if (matrix[row][col] > 0 && !visited.has([row, col].toString())) {
        // increment island count and start traversing neighbors
        count++;
        let neighbors = getNeighbors(row, col, matrix);

        for (let neighbor of neighbors) {
          if (!visited.has(neighbor.toString())) {
            // DO THE THING (increment island count by 1)
            // Initialize a stack with current index
            // Add stringified version of current index to the visited set
            let stack = [neighbor];
            visited.add(neighbor.toString());
            // While stack contains elements
            while (stack.length > 0) {
              // Pop element from stack
              let popped = stack.pop();
              // Get valid neighbors of current element
              let currentNeighbors = getNeighbors(popped[0], popped[1], matrix);
              // Iterate over neigbors
              for (let thisNeighbor of currentNeighbors) {
                // If neighbor has not been visited
                if (!visited.has(thisNeighbor.toString())) {

                  // Add neighbor to stack
                  // Mark neighbor as visited 
                  stack.push(thisNeighbor);
                  visited.add(thisNeighbor.toString());
                }
              }

            }
          }



        }

      }
    }

  }

  // Return island count
  return count;
  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
