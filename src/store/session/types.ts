export type RoleType = string;

export type SeenMessagesType = any[];

export interface SeenMessagesByRoleType {
  buyer: SeenMessagesType;
  seller: SeenMessagesType;
}

export interface SessionState {
  loggedIn: boolean;
  userName: string;
  role: RoleType;
  seenMessagesByRole: SeenMessagesByRoleType;
}

export const UPDATE_SESSION = 'UPDATE_SESSION'
export const UPDATE_SESSION_SEEN_MESSAGES = 'UPDATE_SESSION_SEEN_MESSAGES'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: {
    role: RoleType
  };
}

interface UpdateSessionSeenMessagesAction {
  type: typeof UPDATE_SESSION_SEEN_MESSAGES;
  payload: SeenMessagesType;
}

export type SessionActionTypes = UpdateSessionAction | UpdateSessionSeenMessagesAction
