export interface ChatItemType {
  id: string
  author: string
  avatar: string
  content: string
  timestamp: number
}

export interface ChatType {
  items: ChatItemType[]
}

export interface TradeType {
  id: string
  buyerUsername: string
  paymentMethod: string
  amount: number
  tradeStatusIsPaid: boolean
  chat: ChatType
}

export interface TradeState {
  items: TradeType[]
  bitcoinExchangeRate: number
}

export const CREATE_CHAT_ITEM = 'CREATE_CHAT_ITEM'
export const UPDATE_TRADE_BITCOIN_VALUE = 'UPDATE_TRADE_BITCOIN_VALUE'
export const UPDATE_TRADE_STATUS_PAID = 'UPDATE_TRADE_STATUS_PAID'
export const DELETE_TRADE = 'DELETE_TRADE'

interface PostChatMessageAction {
  type: typeof CREATE_CHAT_ITEM
  tradeId: string
  payload: ChatItemType
}

interface UpdateTradeBitcoinValueAction {
  type: typeof UPDATE_TRADE_BITCOIN_VALUE
  payload: number
}

interface UpdateTradeStatusPaidAction {
  type: typeof UPDATE_TRADE_STATUS_PAID
  tradeId: string
}

interface DeleteTradeAction {
  type: typeof DELETE_TRADE
  tradeId: string
}

export type TradeActionTypes = PostChatMessageAction | UpdateTradeBitcoinValueAction | UpdateTradeStatusPaidAction | DeleteTradeAction
