import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html',
  styleUrls: ['./offers-profile.component.scss']
})
export class OffersProfileComponent implements OnChanges {
  @Input() user: User;
  offers: Offer[] = [];
  offersTableColumns = ['job-name', 'company-name', 'family', 'date', 'province-name', 'municipe-name', 'actions'];

  constructor() { }
  ngOnChanges() {
    this.offers = this.user.offers;
  }
}
