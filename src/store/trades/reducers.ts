import update from 'immutability-helper';

import {
  TradeState,
  UPDATE_TRADE_INDEX,
  CREATE_CHAT_ITEM,
  DELETE_TRADE,
  TradeActionTypes
} from './types'

const initialState: TradeState = {
  items: [
    {
      buyerUsername: 'Chanaar',
      paymentMethod: 'Amazon Gift Card',
      amount: 15,
      tradeStatus: 'Not Paid',
      unread: false,
      chat: {
        items: [
          {
            author: 'user',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          }
        ]
      }
    },
    {
      buyerUsername: 'Mike',
      paymentMethod: 'iTunes Gift Card',
      amount: 30,
      tradeStatus: 'Not Paid',
      unread: false,
      chat: {
        items: [
          {
            author: 'admin',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          },
          {
            author: 'user',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          }
        ]
      }
    },
    {
      buyerUsername: 'John',
      paymentMethod: 'Amazon Gift Card',
      amount: 45,
      tradeStatus: 'Not Paid',
      unread: false,
      chat: {
        items: [
          {
            author: 'user',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          },
          {
            author: 'admin',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          },
          {
            author: 'user',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          }
        ]
      }
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
    case CREATE_CHAT_ITEM:
      return update(state, {
        items: {
          [action.tradeIndex]: {
            chat: {
              items: {
                $push: [action.payload]
              }
            }
          }
        }
      });
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
