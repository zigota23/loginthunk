import * as axios from 'axios'


const instance = axios.create({
  baseURL:'https://mock-api-nodejs.herokuapp.com/',
  withCredentials:false
})

instance.interceptors.request.use(config=>{
  const token = localStorage.getItem('token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
})

export default instance