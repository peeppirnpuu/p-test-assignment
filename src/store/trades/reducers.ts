import update from 'immutability-helper';
import _ from 'lodash';

import {
  TradeState,
  CREATE_CHAT_ITEM,
  DELETE_TRADE,
  TradeActionTypes
} from './types'

const initialState: TradeState = {
  items: [
    {
      id: '1YR5YS18',
      buyerUsername: 'Chanaar',
      paymentMethod: 'Amazon Gift Card',
      amount: 15,
      tradeStatus: 'Not Paid',
      chat: {
        items: [
          {
            id: 'MJBQJDMT',
            author: 'buyer',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          }
        ]
      }
    },
    {
      id: 'XWNEXCLV',
      buyerUsername: 'Mike',
      paymentMethod: 'iTunes Gift Card',
      amount: 30,
      tradeStatus: 'Not Paid',
      chat: {
        items: [
          {
            id: 'HH8ZIX6G',
            author: 'seller',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          },
          {
            id: '3F58QIGC',
            author: 'buyer',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          }
        ]
      }
    },
    {
      id: 'IUKN5XVR',
      buyerUsername: 'John',
      paymentMethod: 'Amazon Gift Card',
      amount: 45,
      tradeStatus: 'Not Paid',
      chat: {
        items: [
          {
            id: 'OM2HY208',
            author: 'buyer',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          },
          {
            id: 'AKZ07DAU',
            author: 'seller',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          },
          {
            id: '5IW95YKQ',
            author: 'buyer',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            timestamp: 1591034680
          }
        ]
      }
    },
  ]
}

export function tradesReducer(
  state = initialState,
  action: TradeActionTypes
): TradeState {
  switch (action.type) {
    case CREATE_CHAT_ITEM:
      return update(state, {
        items: {
          [_.findIndex(state.items, {id: action.tradeId})]: {
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
          $splice: [[_.findIndex(state.items, {id: action.tradeId}), 1]]
        }
      });
    default:
      return state
  }
}
