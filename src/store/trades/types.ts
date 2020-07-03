export interface ChatItemType {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: number;
}

export interface ChatType {
  items: ChatItemType[];
}

export interface TradeType {
  id: string;
  buyerUsername: string;
  paymentMethod: string;
  amount: number;
  tradeStatus: string;
  chat: ChatType;
}

export interface TradeState {
  items: TradeType[];
};

export const CREATE_CHAT_ITEM = 'CREATE_CHAT_ITEM';
export const DELETE_TRADE = 'DELETE_TRADE';

interface postChatMessageAction {
  type: typeof CREATE_CHAT_ITEM;
  tradeId: string;
  payload: ChatItemType;
}

interface DeleteTradeAction {
  type: typeof DELETE_TRADE;
  tradeId: string;
}

export type TradeActionTypes = postChatMessageAction | DeleteTradeAction
