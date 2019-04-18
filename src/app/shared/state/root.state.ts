// index.ts
import { RouterReducerState } from "@ngrx/router-store";

import { UserState, initialUserState } from "./user/user.state";

export interface AppState {
  router?: RouterReducerState;
  user: UserState;
}

export const initialAppState: AppState = {
  user: initialUserState
};

export function getInitialState(): AppState {
  return initialAppState;
}
