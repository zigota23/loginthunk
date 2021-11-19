import { userApi } from "../services/user"
import {setUserData} from '../reducers/user'


/* Thunk */

export const loginUser =  (navigate,payload)=>async(dispatch)=>{
  try{
    const {data} = await userApi.login(payload)
    localStorage.setItem('token',data.accessToken)
    dispatch(setUserData(data.user))
    navigate('/')
  }catch(error){
    console.log(error)
  }
}

export const signUpUser = (navigate,payload)=>async(dispatch)=>{
  try{
    const {data} = await userApi.signUp(payload)
    localStorage.setItem('token',data.accessToken)
    dispatch(setUserData(data.user))
    navigate('/')
  }catch(error){
    console.log(error)
  }
}

export const getUser = ()=>async(dispatch)=>{
  try{
    const {data} = await userApi.getMe()
    dispatch(setUserData(data.profile))
  }catch(error){
    console.log(error)
  }
}


export const refreshToken = ()=>async()=>{
  try{
    const {data} = await userApi.refreshToken()
    localStorage.setItem('token',data.accessToken)
  }catch(error){
    console.log(error)
  }
}

export const logoutUser = (navigate)=>async()=>{
  try{
    const {data} = userApi.logout()
    localStorage.removeItem('token')
    navigate('/login')
  }catch(error){
    console.log(error)
  }
}

export const updateUser = (payload)=>async(dispatch)=>{
  try{
    const {data} = await userApi.updateUser(payload)
    dispatch(setUserData(data))
  }catch(error){
    console.log(error)
  }
}

export const deleteUser = ()=>async(dispatch)=>{
  try{
    const {data} = await userApi.deleteUser()
    dispatch(setUserData(data))
  }catch(error){
    console.log(error)
  }
}