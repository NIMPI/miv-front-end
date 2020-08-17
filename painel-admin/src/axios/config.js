import axios from 'axios'

const token = localStorage.getItem('token')

axios.interceptors.request.use(request => {
  request.headers['Authorization'] = `Bearer ${token}`
  return request
})

export const httpaxios = axios.create({
  baseURL: 'http://localhost:3000/v1'
})
