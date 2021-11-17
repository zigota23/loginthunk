import { SETPRODUCTDATA } from "../actionType/product";
import { productApi } from "../services/product";


export const setProdData = (data)=>({type:SETPRODUCTDATA,data})


/* Thunk */
export const createProd = (payload)=>(dispatch)=>{
  try{
    const {dataCreate} = productApi.createProd(payload)
    const {dataGet} = productApi.getProducts()
    dispatch(setProdData(dataGet))
  }catch(error){
    console.log(error)
  }
}

export const getProducts = ()=>(dispatch)=>{
  try{
    const {data}= productApi.getProducts()
    dispatch(setProdData(data))
  }catch(error){
    console.log(error)
  }
}

export const getProd = (payload)=>(dispatch)=>{
  try{
    const {data} = productApi.getProd(payload)
    dispatch(setProdData(data))
  }catch(error){
    console.log(error)
  }
}

export const updateProd = (payload)=>(dispatch)=>{
  try{
    const {data} = productApi.updateProd(payload)
    dispatch(getProducts())
  }catch(error){
    console.log(error)
  }
}

export const deleteProd = (payload)=>(dispatch)=>{
  try{
    const {data} = productApi.deleteProd(payload)
    dispatch(getProducts())
  }catch(error){
    console.log(error)
  }
}