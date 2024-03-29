import { configureStore, combineReducers, ReducersMapObject } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

import { reducer as appReducer } from './app'
import { reducer as i18nReducer } from './i18n'
import { reducer as userReducer } from './user'

const rootReducer: ReducersMapObject = {
  app: appReducer,
  i18n: i18nReducer,
  user: userReducer
}

const middleware: any[] = []
const logger = createLogger({
  collapsed: false
})

if (import.meta.env.DEV) middleware.push(logger)

export const store = configureStore({
  reducer: combineReducers(rootReducer),
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
