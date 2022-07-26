import { configureStore } from '@reduxjs/toolkit'
import repositoriesReducer from './slices/repositoriesReducers'

export * from './slices/repositoriesReducers'

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
