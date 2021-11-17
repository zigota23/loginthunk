import { combineReducers } from "redux";
import userReducer from './user'
import productReducer from './product'


export const reducers = combineReducers({
  userReducer,
  productReducer
})