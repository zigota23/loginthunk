import * as axios from 'axois'


const inctance = axios.create({
  baseURL:'https://mock-api-nodejs.herokuapp.com/',
  withCredentials:true
})

inctance.interceptor.request.use(config=>{
  const token = localStorage.getItem('token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
})

export default inctance