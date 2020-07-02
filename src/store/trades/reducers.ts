import update from 'immutability-helper';

import {
  UPDATE_TRADE_INDEX,
  DELETE_TRADE,
  TradeState,
  TradeActionTypes
} from './types'

const initialState: TradeState = {
  items: [
    {
      buyerUsername: 'Chanaar',
      paymentMethod: 'Amazon Gift Card',
      amount: 15,
      tradeStatus: 'Not Paid',
      unread: false
    },
    {
      buyerUsername: 'Mike',
      paymentMethod: 'iTunes Gift Card',
      amount: 30,
      tradeStatus: 'Not Paid',
      unread: false
    },
    {
      buyerUsername: 'John',
      paymentMethod: 'Amazon Gift Card',
      amount: 45,
      tradeStatus: 'Not Paid',
      unread: false
    },
  ],
  selectedTradeIndex: undefined
}

export function tradesReducer(
  state = initialState,
  action: TradeActionTypes
): TradeState {
  switch (action.type) {
    case UPDATE_TRADE_INDEX:
      return {
        ...state,
        ...action.payload
      }
    case DELETE_TRADE:
      return update(state, {
        items: {
          $splice: [[action.tradeIndex, 1]]
        }
      });
    default:
      return state
  }
}
