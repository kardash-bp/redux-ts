import { configureStore } from '@reduxjs/toolkit'
import repositoriesReducer from './slices/repositoriesReducers'
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
  useDispatch as rawUseDispatch,
} from 'react-redux'

export * from './slices/repositoriesReducers'

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
  // show the devTools only in development
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
export const useDispatch = () => rawUseDispatch<AppDispatch>()
