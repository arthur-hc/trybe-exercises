const reverseList = (list) => {
  const newList = []
  for(let index = list.length -1; index >= 0; index -= 1) {
    newList.push(list[index])
  }
  return newList
}

console.log(reverseList([10, 9, 8, 7, 6, 5]))