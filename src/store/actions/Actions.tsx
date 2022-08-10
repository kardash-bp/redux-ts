import { StateBlueprint } from '../slices/repositoriesSlice'
import { PayloadAction } from '@reduxjs/toolkit'

export const startSearch = () => {
  return { loading: true, error: null, data: [] }
}
export const searchSuccess = (
  state: StateBlueprint,
  action: PayloadAction<string[]>
) => {
  state.loading = false

  state.data = action.payload
  return state
}
export const searchError = (
  state: StateBlueprint,
  action: PayloadAction<string>
): StateBlueprint => {
  state.loading = false
  state.error = action.payload
  return state
}
