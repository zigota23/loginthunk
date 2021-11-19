
import { setProductData } from "../reducers/product";
import { productApi } from "../services/product";





/* Thunk */
export const createProd = (navigate,payload)=>async(dispatch)=>{
  try{
    const {dataCreate} = await productApi.createProd(payload)
    navigate('/products')
  }catch(error){
    console.log(error)
  }
}

export const getProducts = ()=>async(dispatch)=>{
  try{
    const {data}= await productApi.getProducts()
    dispatch(setProductData(data))
  }catch(error){
    console.log(error)
  }
}

export const getProd = (payload)=>async(dispatch)=>{
  try{
    const {data} = await productApi.getProd(payload)
    dispatch(setProductData(data))
  }catch(error){
    console.log(error)
  }
}

export const updateProd = (navigate,payload,id)=>async(dispatch)=>{
  try{
    const {data} = await productApi.updateProd(payload,id)
    navigate('/product')
  }catch(error){
    console.log(error)
  }
}

export const deleteProd = (payload)=>async(dispatch)=>{
  try{
    const {data} = await productApi.deleteProd(payload)
    dispatch(getProducts())
  }catch(error){
    console.log(error)
  }
}