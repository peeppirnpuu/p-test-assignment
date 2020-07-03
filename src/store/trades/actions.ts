import {
  CREATE_CHAT_ITEM,
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
      timestamp: 1591034680
    }
  }
}

export function deleteTrade(tradeId: string): TradeActionTypes {
  return {
    type: DELETE_TRADE,
    tradeId: tradeId
  }
}
