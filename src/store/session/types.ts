export type RoleType = string;

export interface SessionState {
  loggedIn: boolean;
  userName: string;
  role: RoleType;
}

export const UPDATE_SESSION = 'UPDATE_SESSION'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: {
    role: RoleType;
  }
}

export type SessionActionTypes = UpdateSessionAction
