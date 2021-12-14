export const findWithId = (id, positions) => {
  const result = positions.filter(position => position.id === id)
  return result
}