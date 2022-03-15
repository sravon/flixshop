import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feaures/cartitem'
import userdata from '../feaures/userdata'

export default configureStore({
  reducer: {
    cart: counterReducer,
    user: userdata
  },
})