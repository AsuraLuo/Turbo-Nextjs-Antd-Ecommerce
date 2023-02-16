import { createSlice, Slice } from '@reduxjs/toolkit'

import { fetchAccountDetail } from './actions'

type UserSliceState = {
  isLogin: boolean
  token: string | null
  accountDetail: object | null
}

const initialState: UserSliceState = {
  isLogin: false,
  token: null,
  accountDetail: null
}

export const slice: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToken: (state: UserSliceState, { payload }) => {
      state.isLogin = !!payload
      state.token = payload
    },
    setAccountDetail: (state: UserSliceState, { payload }) => {
      state.accountDetail = payload
    },
    setInitialState: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountDetail.fulfilled, (state: any, { payload }) => {
        state.accountDetail = payload
        state.isLogin = true
      })
      .addCase(fetchAccountDetail.rejected, (state: any) => {
        state.accountDetail = null
        state.isLogin = false
      })
  }
})
