import { SETPRODUCTDATA } from "../actionType/product"


const initailState = {
  products:[]
}

const productReducer = (state=initailState,action)=>{
  switch(action.type){

    case SETPRODUCTDATA:
      return{
        ...state,
        products:[...action.data]
      }

    default: return state
  }
}

export default productReducer