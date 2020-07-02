import {
  UPDATE_TRADE_INDEX,
  CREATE_CHAT_ITEM,
  DELETE_TRADE,
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

export function postChatMessage(index: number, message: string): TradeActionTypes {
  return {
    type: CREATE_CHAT_ITEM,
    tradeIndex: index,
    payload: {
      author: 'user',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: message,
      timestamp: 1591034680
    }
  }
}

export function deleteTrade(index: number): TradeActionTypes {
  return {
    type: DELETE_TRADE,
    tradeIndex: index
  }
}
