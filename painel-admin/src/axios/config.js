import axios from 'axios'
const token = localStorage.getItem('token')

export const httpaxios = axios.create({
  baseURL: 'http://localhost:3000/v1',
  headers: { Authorization: `Bearer ${token}` }
})
