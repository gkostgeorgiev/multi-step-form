import { configureStore } from '@reduxjs/toolkit'
import { multiStepAppSlice } from './slice'

export default configureStore({
  reducer: {
    "multi-step-app": multiStepAppSlice.reducer,
  },
})