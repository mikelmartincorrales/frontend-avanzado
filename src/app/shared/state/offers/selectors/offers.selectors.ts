import { createSelector } from "@ngrx/store";
import { AppState } from "../../root.state";
import { OffersState } from "../offers.state";

const selectOffersState = (state: AppState) => state.offers;

export const selectOffers = createSelector(
  selectOffersState,
  (state: OffersState) => state.offers
);
