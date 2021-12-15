import api from './apiConfig';

export const getSubmissions = async position_id => {
  try {
    const res = await api.get(`/positions/${position_id}/submissions`)
    return res.data
  } catch(error) {
    throw error
  }
}

export const createSubmission = async (position_id, submission) => {
  try {
    const res = await api.post(`/positions/${position_id}/submissions`, submission)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateSubmission = async (id, position_id, submission) => {
  try {
      const res = await api.put(`/positions/${position_id}/submissions/${id}`, submission)
      return res.data
  } catch (error) {
      throw error
  }
}

export const destroySubmission = async (id, position_id) => {
  try {
    const res = await api.delete(`/positions/${position_id}/submissions/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}