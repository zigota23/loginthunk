import { userApi } from "../services/user"
import {SETUSERDATA} from '../actionType/user'

export const setUserData = (data)=>({type:SETUSERDATA,data})


/* Thunk */
export const signUpUser = (payload)=>(dispatch)=>{
  try{
    const {data} = userApi.signUp(payload)
    localStorage.setItem('token',data.accessToken)
    dispatch(setUserData(data.user))
  }catch(error){
    console.log(error)
  }
}

export const refreshToken = ()=>()=>{
  try{
    const {data} =userApi.refreshToken()
    localStorage.setItem('token',data.accessToken)
  }catch(error){
    console.log(error)
  }
}

export const logoutUser = ()=>()=>{
  try{
    const {data} = userApi.logout()
  localStorage.removeItem('token')
  }catch(error){
    console.log(error)
  }
}

export const updateUser = (payload)=>(dispatch)=>{
  try{
    const {data} = userApi.updateUser()
    dispatch(setUserData(data))
  }catch(error){
    console.log(error)
  }
}

export const deleteUser = ()=>(dispatch)=>{
  try{
    const {data} = userApi.deleteUser()
    dispatch(setUserData(data))
  }catch(error){
    console.log(error)
  }
}