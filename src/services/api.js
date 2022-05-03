import axios from 'axios'

// export default axios.create({
//   baseURL: 'http://localhost:5000',
//   timeout: 1000,
//   headers: {
//     'Content-type': 'application/json'
//   }
// })

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export default api
