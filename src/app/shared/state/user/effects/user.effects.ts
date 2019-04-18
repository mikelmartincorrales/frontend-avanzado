import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { User } from "../../../models/user.model";

import { AppState } from "../../root.state";
import {
  Login,
  LoginSuccess,
  UpdateUser,
  UpdateUserSuccess,
  EUserActions,
  AuthData
} from "../actions/user.actions";
import { ProfileService } from "../../../../shared/services/profile.service";
import { SigninService } from "../../../../views/signin/signin.service";

@Injectable()
export class UserEffects {
  @Effect()
  login$ = this._actions$.pipe(
    ofType<Login>(EUserActions.Login),
    map(action => action.payload),
    switchMap((auth: AuthData) => this._signinService.login(auth)),
    switchMap((user: User) => of(new LoginSuccess(user)))
  );

  @Effect()
  updateUser$ = this._actions$.pipe(
    ofType<UpdateUser>(EUserActions.UpdateUser),
    map(action => action.payload),
    switchMap((user: User) => {
      this._profileService.updateProfile(user);
      return of(new UpdateUserSuccess(user));
    })
  );

  constructor(
    private _profileService: ProfileService,
    private _signinService: SigninService,
    private _actions$: Actions,
    private _store: Store<AppState>
  ) {}
}
