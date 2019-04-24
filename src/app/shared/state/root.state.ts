// index.ts
import { RouterReducerState } from "@ngrx/router-store";

import { UserState, initialUserState } from "./user/user.state";
import { OffersState, initialOffersState } from "./offers/offers.state";

export interface AppState {
  router?: RouterReducerState;
  user: UserState;
  offers: OffersState;
}

export const initialAppState: AppState = {
  user: initialUserState,
  offers: initialOffersState
};

export function getInitialState(): AppState {
  return initialAppState;
}
