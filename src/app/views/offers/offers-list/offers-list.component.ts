import { Component, OnInit } from "@angular/core";
import { Offer } from "src/app/shared/models/offer.model";
import { User } from "src/app/shared/models/user.model";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../shared/state/root.state";
import { selectUser } from "../../../shared/state/user/selectors/user.selectors";
import { selectOffers } from "../../../shared/state/offers/selectors/offers.selectors";
import { GetOffers } from "src/app/shared/state/offers/actions/offers.actions";

@Component({
  selector: "app-offers-list",
  templateUrl: "./offers-list.component.html"
})
export class OffersListComponent implements OnInit {
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];
  user: User;
  offers: Offer[];

  constructor(private _store: Store<AppState>) {
    this._store.dispatch(new GetOffers());
    this._store.pipe(select(selectUser)).subscribe(u => (this.user = u));
    this._store.pipe(select(selectOffers)).subscribe(o => (this.offers = o));
    this.selectOffers();
  }

  private selectOffers() {
    const studiesOfUser = this.user.studies;
    const offersOfUser = this.user.offers;
    this.offersStudy = this.offers
      .filter(offer =>
        studiesOfUser.some(study => study.uid === offer.category.uid)
      )
      .map(offer => {
        const offerUser = !!offersOfUser.find(
          _offerUser => _offerUser.id === offer.id
        );
        return { ...offer, subscribe: offerUser };
      });

    this.offersOther = this.offers.filter(offer =>
      studiesOfUser.every(study => study.uid !== offer.category.uid)
    );
  }

  ngOnInit() {}
}
