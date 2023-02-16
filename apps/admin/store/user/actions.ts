import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAccountDetail = createAsyncThunk(
  'user/fetchAccountDetail',
  async (payload: any) => {
    try {
      const { fetchQuery } = payload
      const date: Date = new Date()
      const time: number = date.getTime()
      const response = await fetchQuery(`/sys/user/info?_t=${time}`)

      if (response.data) {
        return response.data
      }
      return Promise.reject(response)
    } catch (error: any) {
      return error
    }
  }
)
