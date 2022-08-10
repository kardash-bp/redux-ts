import { createSlice } from '@reduxjs/toolkit'
import {
  getRepositories,
  startSearch,
  searchError,
  searchSuccess,
} from '../actions'

export interface StateBlueprint {
  loading: boolean
  error: string | null | undefined
  data: string[]
}

const initialState: StateBlueprint = {
  loading: false,
  data: [],
  error: null,
}
const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    startSearch,
    searchSuccess,
    searchError,
  },
  extraReducers: (builder) => {
    builder.addCase(getRepositories.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getRepositories.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(getRepositories.rejected, (state, { payload }) => {
      state.error = payload?.message
    })
  },
})
// export const { startSearch, searchError, searchSuccess } =
//   repositoriesSlice.actions
export default repositoriesSlice.reducer

// export function getData(term: string): any {
//   return async (dispatch: Dispatch<Action>) => {
//     try {
//       const { data } = await axios.get(
//         'https://registry.npmjs.org/-/v1/search',
//         {
//           params: {
//             text: term,
//           },
//         }
//       )
//       const names = data.objects.map((d: any) => d.package.name)
//       dispatch(searchSuccess(names))
//     } catch (err: any) {
//       dispatch(searchError(err.message))
//     }
//   }
// }
