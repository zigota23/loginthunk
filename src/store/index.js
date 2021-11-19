import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/user'
import productReducer from './reducers/product'


const reducer = {
  userReducer,
  productReducer
}

const store = configureStore({
  reducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    immutableCheck:false,
    serializableCheck:false,
    thunk:true
  }),
  devTools:true
  })

export default store