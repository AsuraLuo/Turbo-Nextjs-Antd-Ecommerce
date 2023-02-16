import { createSlice, Slice } from '@reduxjs/toolkit'

import { fetchStoreConfig } from './actions'

export const slice: Slice = createSlice({
  name: 'app',
  initialState: {
    activeMenus: [],
    menus: [],
    navMenus: [],
    sideMenus: []
  },
  reducers: {
    setMenus: (state: any, { payload }) => {
      const { activeMenus, menus } = payload
      const result = menus.find((nav: any) => nav.name === 'IT云')
      const navMenus = result?.children ?? []
      const sideMenus = navMenus?.[0] ?? {}
      state.menus = menus
      state.navMenus = activeMenus?.[0]?.children ?? navMenus
      state.sideMenus = [activeMenus?.[1] ?? sideMenus]
      state.activeMenus = activeMenus
    },
    setNavMenus: (state: any, { payload }) => {
      const sideMenus = [payload?.[0] ?? {}]
      state.navMenus = payload
      state.sideMenus = sideMenus
    },
    setSideMenus: (state: any, { payload }) => {
      state.sideMenus = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreConfig.fulfilled, (state: any, { payload }) => {
        state.setAppConfig = payload
      })
      .addCase(fetchStoreConfig.rejected, (state: any) => {
        state.setAppConfig = null
      })
  }
})
