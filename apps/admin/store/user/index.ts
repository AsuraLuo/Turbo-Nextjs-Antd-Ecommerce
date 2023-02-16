import * as userActions from './actions'
import { slice } from './slice'

const { actions, reducer } = slice
const asyncActions: any = { ...userActions }

export { actions, asyncActions, reducer }
