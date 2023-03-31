function getNeighbors(row, col, graph) {

  let neighbors = [];
  // Check top
  if (row > 0 && graph[row-1][col] > 0) {
    neighbors.push([row - 1, col])
  }
  // Check bottom
  if (row < graph.length - 1  && graph[row + 1][col] > 0){
    neighbors.push([row + 1, col])
  }
  // Check left
  if (col > 0  && graph[row][col-1] > 0) {
    neighbors.push([row, col - 1])
  }
  // Check right
  if (col < graph[row].length - 1  && graph[row][col +1] > 0) {
    neighbors.push([row, col + 1])
  }
  // Return neighbors
  return neighbors;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let stack = [[row, col]]
  // Put the stringified starting node in visited
  visited.add([row, col].toString());
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
while(stack.length > 0){
  // Pop the first node
  let popped = stack.pop();
  // DO THE THING (increment size by 1)
  size++;
  // Then push all the UNVISITED neighbors on top of the stack
  
  // and mark them as visited
  let neighbors = getNeighbors(popped[0], popped[1], graph);
  for( let node of neighbors){
    if(!visited.has(node.toString())){
      visited.add(node.toString());
      stack.push(node);
    }
  }

}
  
  // return size
return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];
