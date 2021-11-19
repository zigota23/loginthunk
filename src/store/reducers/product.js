import { createAction,createReducer } from "@reduxjs/toolkit"


const initailState = {
  products:[]
}

export const setProductData = createAction('productReducer/setdata')



const productReducer = createReducer(initailState,{
  [setProductData]:(state,action)=>{
    state.products = [...action.payload]
  }
})

export default productReducer