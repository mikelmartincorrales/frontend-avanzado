// root-reducer
import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { userReducers } from "./user/reducers/user.reducers";
import { offersReducers } from "./offers/reducers/offers.reducers";

export interface AppState {}

export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  user: userReducers,
  offers: offersReducers
};
