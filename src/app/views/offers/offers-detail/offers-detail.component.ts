import { Component, OnInit } from "@angular/core";
import { Offer } from "src/app/shared/models/offer.model";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/app/shared/models/user.model";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../shared/state/root.state";
import { selectUser } from "../../../shared/state/user/selectors/user.selectors";
import { selectOffers } from "../../../shared/state/offers/selectors/offers.selectors";
import { UpdateUser } from "src/app/shared/state/user/actions/user.actions";

@Component({
  selector: "app-offers-detail",
  templateUrl: "./offers-detail.component.html",
  styleUrls: ["./offers-detail.component.scss"]
})
export class OffersDetailComponent implements OnInit {
  offer: Offer;
  offers: Offer[];
  user: User;
  constructor(
    private _store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this._store.pipe(select(selectUser)).subscribe(u => (this.user = u));
    this.route.params.subscribe(params => {
      this._store.pipe(select(selectOffers)).subscribe(o => (this.offers = o));

      const offerID = +params.id;
      this.offer = (this.offers.find(offer => offer.id === offerID) ||
        {}) as Offer;
    });
  }

  subscribeOffer() {
    this.user.offers = [...this.user.offers, this.offer];
    this._store.dispatch(new UpdateUser({ ...this.user }));
    this.router.navigate(["/admin/profile"]);
  }
  unsubscribeOffer() {
    this.user.offers = this.user.offers.filter(
      _offer => _offer.id !== this.offer.id
    );
    this._store.dispatch(new UpdateUser({ ...this.user }));
    this.router.navigate(["/admin/profile"]);
  }
  isSubscribe(): boolean {
    return !!this.user.offers.find(_offer => this.offer.id === _offer.id);
  }

  ngOnInit() {}
}
