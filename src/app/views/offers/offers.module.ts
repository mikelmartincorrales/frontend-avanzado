import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { OffersStudentComponent } from "./offers-student.component";
import { OffersStudentDetailComponent } from "./offers-student-detail.component";
import { OffersCompanyComponent } from "./offers-company.component";
import { OffersCompanyDetailComponent } from "./offers-company-detail.component";

@NgModule({
  declarations: [OffersComponent, OffersStudentComponent, OffersStudentDetailComponent, OffersCompanyComponent,OffersCompanyDetailComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    ReactiveFormsModule
  ]
})
export class OffersModule { }
