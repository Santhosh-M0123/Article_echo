import { configureStore } from '@reduxjs/toolkit'
import Api from './ApiSlice'
export default configureStore({
  reducer: {Api},
})