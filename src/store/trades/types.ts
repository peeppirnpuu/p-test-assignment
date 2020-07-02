export const UPDATE_TRADE_INDEX = 'UPDATE_TRADE_INDEX';
export const DELETE_TRADE = 'DELETE_TRADE';

export interface TradeType {
  buyerUsername: string;
  paymentMethod: string;
  amount: number;
  tradeStatus: string;
  unread: boolean;
}

export type TradeState = {
  items: TradeType[],
  selectedTradeIndex: number | void
};

interface OpenTradeAction {
  type: typeof UPDATE_TRADE_INDEX;
  payload: {
    selectedTradeIndex: number;
  }
}

interface DeleteTradeAction {
  type: typeof DELETE_TRADE;
  tradeIndex: number;
}

export type TradeActionTypes = OpenTradeAction | DeleteTradeAction
