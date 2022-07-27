//*  async thunk using createAsyncThunk

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type GetDataError = {
  message: string
}

export const getRepositories = createAsyncThunk<
  string[],
  string,
  { rejectValue: GetDataError }
>('repositories/getRepositories', async (term: string, { rejectWithValue }) => {
  try {
    const { data, status } = await axios.get(
      'https://registry.npmjs.org/-/v1/search',
      {
        params: {
          text: term,
        },
      }
    )

    if (status !== 200) {
      // Return the error message:
      console.log('rejected!!')
      return rejectWithValue({
        message: 'Failed to fetch data!',
      })
    }
    return data.objects.map((d: any) => d.package.name)
  } catch (err: any) {
    console.log(err.message)
    return rejectWithValue({ message: 'Ops there seems to be an error' })
  }
})
