export const findWithId = (id, positions, what_type) => {
  
  const result = positions.filter(position => position.id === id)
  return result
}