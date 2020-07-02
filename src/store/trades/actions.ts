import {
  UPDATE_TRADE_INDEX,
  TradeType,
  TradeActionTypes
} from './types'

export function openTrade(index: number): TradeActionTypes {
  return {
    type: UPDATE_TRADE_INDEX,
    payload: {
      selectedTradeIndex: index
    }
  }
}
