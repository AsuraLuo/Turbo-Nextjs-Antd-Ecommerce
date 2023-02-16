import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchI18nConfig = createAsyncThunk(
  'i18n/fetchI18nConfig',
  async () => {
    const site = {}
    return site
  }
)
