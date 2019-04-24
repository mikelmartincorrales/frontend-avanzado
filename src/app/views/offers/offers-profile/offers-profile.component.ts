import { Component, OnInit } from "@angular/core";
import { Offer } from "src/app/shared/models/offer.model";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../shared/state/root.state";
import { selectUser } from "../../../shared/state/user/selectors/user.selectors";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: "app-offers-profile",
  templateUrl: "./offers-profile.component.html"
})
export class OffersProfileComponent implements OnInit {
  offers: Offer[] = [];
  user: User;

  constructor(private _store: Store<AppState>) {
    this._store.pipe(select(selectUser)).subscribe(u => (this.user = u));
    this.selectOffers();
  }

  private selectOffers() {
    this.offers = this.user.offers;
  }

  ngOnInit() {}
}
