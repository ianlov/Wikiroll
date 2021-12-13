import axios from 'axios'

const getToken = () => {
    return new Promise(resolve => {
        resolve(`Bearer ${localStorage.getItem('token') || null}`)
    })
}

const api = axios.create({
  baseURL: 'localhost:3000'
})

export default api