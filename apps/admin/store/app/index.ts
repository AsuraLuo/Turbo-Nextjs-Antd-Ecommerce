import * as appActions from './actions'
import { slice } from './slice'

const { actions, reducer } = slice
const asyncActions: any = { ...appActions }

export { actions, asyncActions, reducer }
