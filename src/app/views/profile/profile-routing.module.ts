import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { ProfileStudentComponent } from "./student/profile-student.component";
import { ProfileCompanyComponent } from "./company/profile-company.component";
import { ProfileStudentDetailComponent } from "./student/profile-student-detail.component";
import {ProfileStudentAcademicComponent} from "./student/profile-student-academic.component";
import {ProfileStudentExperienceComponent} from "./student/profile-student-experience.component";

const routes: Routes = [
  {
    path: "student/:id",
    component: ProfileStudentComponent
  },
  {
    path: "student/:id/detail",
    component: ProfileStudentDetailComponent
  },
  {
    path: "student/:id/academic",
    component: ProfileStudentAcademicComponent
  },
  {
    path: "student/:id/experience",
    component: ProfileStudentExperienceComponent
  },
  {
    path: "student/:id/languages",
    component: ProfileComponent
  },
  {
    path: "company/:id",
    component: ProfileCompanyComponent
  },
  {
    path: "company/:id/detail",
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
