import api from './apiConfig';

export const getPositions = async () => {
  try {
    const res = await api.get('/positions')
    return res.data
  } catch(error) {
    throw error
  }
}

export const getPosition = async id => {
  try {
    const res = await api.get(`/positions/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updatePosition = async (id, position) => {
  try {
      const res = await api.put(`/position/${id}`, position)
      return res.data
  } catch (error) {
      throw error
  }
}