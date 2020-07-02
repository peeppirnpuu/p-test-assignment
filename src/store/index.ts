import { combineReducers } from 'redux'

import { sessionReducer } from './session/reducers'
import { tradesReducer } from './trades/reducers'

const rootReducer = combineReducers({
  session: sessionReducer,
  trades: tradesReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
