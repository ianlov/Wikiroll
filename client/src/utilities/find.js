export const find = (allPositions, search) => {
  // filter through all three types of data, push to new array
  const searchResults = []
  if (!search) {
    // return a message
  }
  search = search.toLowerCase();
  allPositions.forEach(position => {
    if (position.name.toLowerCase().includes(search)) {
      searchResults.push(position)
    }
  })
  return searchResults
}