import { configureStore } from '@reduxjs/toolkit'
import userAuth from './AuthSlice'

export default configureStore({
  reducer: {
    user: userAuth
  }
})