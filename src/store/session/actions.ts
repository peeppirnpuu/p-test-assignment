import { RoleType, UPDATE_SESSION, SessionActionTypes } from './types'

export function changeRole(role: RoleType): SessionActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: {
      role: role
    }
  }
}
