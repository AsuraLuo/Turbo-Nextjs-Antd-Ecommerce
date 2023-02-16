import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchStoreConfig = createAsyncThunk(
  'app/fetchStoreConfig',
  async () => {
    const site = {}
    return site
  }
)
