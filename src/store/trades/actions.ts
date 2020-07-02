import {
  UPDATE_TRADE_INDEX,
  DELETE_TRADE,
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

export function deleteTrade(index: number): TradeActionTypes {
  return {
    type: DELETE_TRADE,
    tradeIndex: index
  }
}
