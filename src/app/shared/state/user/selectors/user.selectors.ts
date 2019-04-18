import { createSelector } from "@ngrx/store";
import { AppState } from "../../root.state";
import { UserState } from "../user.state";

const selectUserState = (state: AppState) => state.user;

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);
