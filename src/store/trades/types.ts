export interface ChatItemType {
  author: string,
  avatar: string,
  content: string,
  timestamp: number
}

export interface ChatType {
  items: ChatItemType[];
}

export interface TradeType {
  buyerUsername: string;
  paymentMethod: string;
  amount: number;
  tradeStatus: string;
  unread: boolean;
  chat: ChatType;
}

export interface TradeState {
  items: TradeType[];
  selectedTradeIndex: number | void;
};

export const UPDATE_TRADE_INDEX = 'UPDATE_TRADE_INDEX';
export const CREATE_CHAT_ITEM = 'CREATE_CHAT_ITEM';
export const DELETE_TRADE = 'DELETE_TRADE';

interface OpenTradeAction {
  type: typeof UPDATE_TRADE_INDEX;
  payload: {
    selectedTradeIndex: number;
  }
}

interface postChatMessageAction {
  type: typeof CREATE_CHAT_ITEM;
  tradeIndex: number;
  payload: ChatItemType;
}

interface DeleteTradeAction {
  type: typeof DELETE_TRADE;
  tradeIndex: number;
}

export type TradeActionTypes = OpenTradeAction | postChatMessageAction | DeleteTradeAction
