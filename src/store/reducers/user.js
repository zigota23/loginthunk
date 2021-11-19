import { createAction,createReducer } from "@reduxjs/toolkit"


const initailState = {
  user:{
    email:'',
    first_name:'',
    last_name:'',
  }

}

export const setUserData = createAction('userReducer/setdata')

const userReducer = createReducer(initailState,(builder)=>{
  builder
  .addCase(setUserData,(state,action)=>{
    state.user = action.payload
  })
  .addDefaultCase((state,action)=>{})
})


export default userReducer