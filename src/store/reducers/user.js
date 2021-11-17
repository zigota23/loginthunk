import { SETUSERDATA } from "../actionType/user"


const initailState = {
  email:'',
  login:'',
}

const userReducer = (state=initailState,action)=>{
  switch(action.type){

    case SETUSERDATA:
      return{
        ...state,
        ...action.data
      }

    default: return state
  }
}

export default userReducer