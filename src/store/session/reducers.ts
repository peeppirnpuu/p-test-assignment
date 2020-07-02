import {
  SessionState,
  UPDATE_SESSION,
  SessionActionTypes
} from './types';

const initialState: SessionState = {
  loggedIn: false,
  userName: '',
  role: 'user'
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
    default:
      return state
  }
}
