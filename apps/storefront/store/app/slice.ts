import { createSlice, Slice } from '@reduxjs/toolkit'

export const slice: Slice = createSlice({
  name: 'app',
  initialState: {
    currency: null,
    loading: false,
    storeConfig: null,
    viewport: '',
    bolt: false
  },
  reducers: {
    setAppConfig: (state: any, { payload }) => {
      const { bolt, viewport } = payload
      state.bolt = bolt
      state.viewport = viewport
    },
    setLoading: (state: any, { payload }) => {
      state.loading = payload
    }
  }
})
