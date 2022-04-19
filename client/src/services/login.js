import axios from 'axios'
const baseUrl = '/api/login'

export const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  console.log('r', response)
  return response.data
}

