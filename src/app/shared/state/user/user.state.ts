import { User } from "../../models/user.model";

export interface UserState {
  user: User;
}

export const initialUserState: UserState = {
  user: null
};
