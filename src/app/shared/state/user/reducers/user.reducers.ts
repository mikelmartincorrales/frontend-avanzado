import { EUserActions } from "../actions/user.actions";
import { UserActions } from "../actions/user.actions";
import { initialUserState, UserState } from "../user.state";
import { User } from "../../../models/user.model";

export const userReducers = (
  state = initialUserState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case EUserActions.LoginSuccess: {
      return {
        ...state,
        user: action.payload
      };
    }
    case EUserActions.UpdateUserSuccess: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};
