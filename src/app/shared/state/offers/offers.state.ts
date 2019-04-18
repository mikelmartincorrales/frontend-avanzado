import { Offer } from "../../models/offer.model";

export interface OffersState {
  offers: Offer[];
}

export const initialOffersState: OffersState = {
  offers: []
};
