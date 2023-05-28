import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

import { fetchStoreConfig } from './actions'

interface Menu {
  id: string
  name: string
  url: string
  children: Array<Menu>
}

export interface AppState {
  activeMenus: Array<Menu>
  menus: Array<Menu>
  navMenus: Array<Menu>
  sideMenus: Array<Menu>
}

const initialState: AppState = {
  activeMenus: [],
  menus: [],
  navMenus: [],
  sideMenus: []
}

export const slice: Slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMenus: (
      state: AppState,
      action: PayloadAction<{
        activeMenus: Array<Menu>
        menus: Array<Menu>
      }>
    ) => {
      const { activeMenus, menus } = action.payload
      const result: any = menus.find((nav: any) => nav.name === 'IT云')
      const navMenus = result?.children ?? []
      const sideMenus = navMenus?.[0] ?? {}
      state.menus = menus
      state.navMenus = activeMenus?.[0]?.children ?? navMenus
      state.sideMenus = [activeMenus?.[1] ?? sideMenus]
      state.activeMenus = activeMenus
    },
    setNavMenus: (state: AppState, action: PayloadAction<Menu[]>) => {
      const sideMenus = [action.payload?.[0] ?? {}]
      state.navMenus = action.payload
      state.sideMenus = sideMenus
    },
    setSideMenus: (
      state: any,
      action: PayloadAction<{
        sideMenus: Menu[]
      }>
    ) => {
      state.sideMenus = action.payload
    },
    setInitialState: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreConfig.fulfilled, (state: AppState, action: any) => {
        state.menus = action.payload
      })
      .addCase(fetchStoreConfig.rejected, (state: AppState) => {
        state.menus = []
      })
  }
})
