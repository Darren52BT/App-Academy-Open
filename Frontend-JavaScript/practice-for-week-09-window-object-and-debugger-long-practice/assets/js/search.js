export function findElementById(id) {
  // Return the element in the DOM with corresponding `id`

  // Your code here
  return dfs(document.body, (ele) => ele.id === id,  true)
}

export function findFirstElementOfTag(tag) {
  // Return the first occurence of an element of tag name `tag`

  // Your code here
  return dfs(document.body, (ele) => ele.tagName === tag, true)
}


export function findFirstElementOfClass(cls) {
  // Return the first occurence of an element of class `cls`

  // Your code here
  return dfs(document.body, (ele) => ele.className === cls, true)
}

export function findElementsOfTag(tag) {
  // Return an array of elements that have a tag name of `tag`

  // Your code here
  return dfs(document.body, (ele) => ele.tagName === tag, false)
}

export function findElementsOfClass(cls) {
  // Return an array of elements that have are of class `cls`

  // Your code here
  return dfs(document.body, (ele) => ele.className === cls, false)
}

function dfs (parent, searchCondition, isFirstTarget){

  let stack = [parent]

  let targets = []

  while(stack.length > 0){

    let current = stack.shift()
    if(searchCondition(current)){

      if(isFirstTarget){
        return current
      } else{
        targets.push(current)
      }
    }
    for (let ele of current.children){
      stack.push(ele)
    }
  }
  return targets;
}
