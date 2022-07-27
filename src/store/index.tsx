import { configureStore } from '@reduxjs/toolkit'
import repositoriesSlice from './slices/repositoriesSlice'
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
  useDispatch as rawUseDispatch,
} from 'react-redux'

export * from './slices/repositoriesSlice'

export const store = configureStore({
  reducer: {
    repositories: repositoriesSlice,
  },
  // show the devTools only in development
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
export const useDispatch = () => rawUseDispatch<AppDispatch>()
