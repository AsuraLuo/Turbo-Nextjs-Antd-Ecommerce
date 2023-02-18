import { createSlice, Slice } from '@reduxjs/toolkit'

import { i18n } from '@config/i18n'

import { fetchI18nConfig } from './actions'

type I18nSliceState = {
  key: string | null
  messages: object | null
  defaultMessage: object | null
}

const initialState: I18nSliceState = {
  key: null,
  messages: null,
  defaultMessage: i18n
}

export const slice: Slice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setI18nConfig: (state: I18nSliceState, { payload }) => {
      state.key = payload.key
      state.messages = payload.messages
    },
    setInitialState: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchI18nConfig.fulfilled, (state: any, { payload }) => {
        state.setAppConfig = payload
      })
      .addCase(fetchI18nConfig.rejected, (state: any) => {
        state.setAppConfig = null
      })
  }
})
