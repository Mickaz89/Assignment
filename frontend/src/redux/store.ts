import { configureStore } from '@reduxjs/toolkit'
import nbaReducer from "./nba.slice";

export const store = configureStore({
  reducer: {
    nba:  nbaReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch