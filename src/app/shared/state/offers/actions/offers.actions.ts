import { Action } from "@ngrx/store";
import { Offer } from "../../../models/offer.model";

export enum EOffersActions {
  GetOffers = "[Offers] Get Offer",
  GetOffersSuccess = "[Offers] Get Offer Success"
}

export class GetOffers implements Action {
  public readonly type = EOffersActions.GetOffers;
}

export class GetOffersSuccess implements Action {
  public readonly type = EOffersActions.GetOffersSuccess;
  constructor(public payload: Offer[]) {}
}

export type OffersActions = GetOffers | GetOffersSuccess;
