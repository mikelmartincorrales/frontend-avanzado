import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from "./offers.component";
import { OffersStudentComponent } from "./offers-student.component";
import { OffersStudentDetailComponent } from "./offers-student-detail.component";
import { OffersCompanyComponent } from "./offers-company.component";
import { OffersCompanyDetailComponent } from "./offers-company-detail.component";

const routes: Routes = [
  {
    path: "student/:id",
    component: OffersStudentComponent
  },
  {
    path: "student/:id/detail/:offerid",
    component: OffersStudentDetailComponent
  },
  {
    path: "student/:id/my",
    component: OffersStudentComponent
  },
  {
    path: "company/:id",
    component: OffersCompanyComponent
  },
  {
    path: "company/:id/detail/:offerid",
    component: OffersCompanyDetailComponent
  },
  {
    path: "company/:id/new",
    component: OffersComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
