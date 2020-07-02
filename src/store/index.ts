import { combineReducers } from 'redux'

import { tradesReducer } from './trades/reducers'

const rootReducer = combineReducers({
  trades: tradesReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
