import { Action } from "@ngrx/store";
import { User } from "../../../models/user.model";

export enum EUserActions {
  Login = "[User] Login",
  LoginSuccess = "[User] Login Success",
  UpdateUser = "[User] Update",
  UpdateUserSuccess = "[User] UpdateUser Success",
  GetUser = "[User] Get User",
  GetUserSuccess = "[User] Get User Success"
}

export interface AuthData {
  email: string;
  password: string;
}

export class Login implements Action {
  public readonly type = EUserActions.Login;
  constructor(public payload: AuthData) {}
}

export class LoginSuccess implements Action {
  public readonly type = EUserActions.LoginSuccess;
  constructor(public payload: User) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: User) {}
}

export class UpdateUser implements Action {
  public readonly type = EUserActions.UpdateUser;
  constructor(public payload: User) {}
}

export class UpdateUserSuccess implements Action {
  public readonly type = EUserActions.UpdateUserSuccess;
  constructor(public payload: User) {}
}

export type UserActions =
  | Login
  | LoginSuccess
  | GetUser
  | GetUserSuccess
  | UpdateUser
  | UpdateUserSuccess;
