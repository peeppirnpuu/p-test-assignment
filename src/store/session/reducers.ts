import update from 'immutability-helper';

import {
  SessionState,
  UPDATE_SESSION,
  UPDATE_SESSION_SEEN_MESSAGES,
  SessionActionTypes
} from './types';

const initialState: SessionState = {
  loggedIn: false,
  userName: '',
  role: 'user',
  seenMessagesByRole: {
    admin: [],
    user: []
  }
}

export function sessionReducer(
  state = initialState,
  action: SessionActionTypes
): SessionState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }
    case UPDATE_SESSION_SEEN_MESSAGES: {
      return update(state, {
        seenMessagesByRole: {
          [state.role]: {
            $push: action.payload
          }
        }
      });
    }
    default:
      return state
  }
}
