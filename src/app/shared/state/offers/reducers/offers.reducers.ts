import { EOffersActions } from "../actions/offers.actions";
import { OffersActions } from "../actions/offers.actions";
import { initialOffersState, OffersState } from "../offers.state";

export const offersReducers = (
  state = initialOffersState,
  action: OffersActions
): OffersState => {
  switch (action.type) {
    case EOffersActions.GetOffersSuccess: {
      return {
        ...state,
        offers: action.payload
      };
    }
    default:
      return state;
  }
};
