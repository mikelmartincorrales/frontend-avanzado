import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { Offer } from "../../../models/offer.model";

import { AppState } from "../../root.state";
import {
  GetOffers,
  GetOffersSuccess,
  EOffersActions
} from "../actions/offers.actions";
import { OffersService } from "../../../../shared/services/offers.service";

@Injectable()
export class OffersEffects {
  @Effect()
  getOffers$ = this._actions$.pipe(
    ofType<GetOffers>(EOffersActions.GetOffers),
    switchMap(() => this._offersService.getOffers()),
    switchMap((offers: Offer[]) => of(new GetOffersSuccess(offers)))
  );

  constructor(
    private _offersService: OffersService,
    private _actions$: Actions,
    private _store: Store<AppState>
  ) {}
}
