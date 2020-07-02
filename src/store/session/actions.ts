import {
  RoleType,
  SeenMessagesType,
  UPDATE_SESSION,
  UPDATE_SESSION_SEEN_MESSAGES,
  SessionActionTypes
} from './types'

export function changeRole(role: RoleType): SessionActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: {
      role: role
    }
  }
}

export function markMessagesRead(messages: SeenMessagesType): SessionActionTypes {
  return {
    type: UPDATE_SESSION_SEEN_MESSAGES,
    payload: messages
  }
}
