import api from './apiConfig';

export const getTransitions = async position_id => {
  try {
    const res = await api.get(`/positions/${position_id}/transitions`)
    return res.data
  } catch(error) {
    throw error
  }
}

export const createTransition = async (position_id, transition) => {
  try {
    const res = await api.post(`/positions/${position_id}/transitions`, transition)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateTransition = async (id, position_id, transition) => {
  try {
      const res = await api.put(`/positions/${position_id}/transitions/${id}`, transition)
      return res.data
  } catch (error) {
      throw error
  }
}

export const destroyTransition = async (id, position_id) => {
  try {
    const res = await api.delete(`/positions/${position_id}/transitions/${id}`)
  } catch (error) {
    throw error
  }
}