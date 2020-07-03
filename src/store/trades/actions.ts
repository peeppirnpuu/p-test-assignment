import {
  CREATE_CHAT_ITEM,
  UPDATE_TRADE_STATUS_PAID,
  DELETE_TRADE,
  TradeActionTypes
} from './types'

export function postChatMessage(tradeId: string, message: string, role: string): TradeActionTypes {
  return {
    type: CREATE_CHAT_ITEM,
    tradeId: tradeId,
    payload: {
      id: 'VSKYSLV2',
      author: role,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: message,
      timestamp: Math.round((new Date()).getTime() / 1000)
    }
  }
}

export function markTradeAsPaid(tradeId: string): TradeActionTypes {
  return {
    type: UPDATE_TRADE_STATUS_PAID,
    tradeId: tradeId
  }
}

export function deleteTrade(tradeId: string): TradeActionTypes {
  return {
    type: DELETE_TRADE,
    tradeId: tradeId
  }
}
