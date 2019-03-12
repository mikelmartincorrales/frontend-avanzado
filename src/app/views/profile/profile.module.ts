import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { ProfileConfigComponent } from "./profile-config.component";
import { ProfileStudentComponent } from "./student/profile-student.component";
import { ProfileStudentDetailComponent } from "./student/profile-student-detail.component";
import { ProfileStudentAcademicComponent } from "./student/profile-student-academic.component";
import { ProfileStudentExperienceComponent } from "./student/profile-student-experience.component";
import { ProfileStudentLanguageComponent } from "./student/profile-student-language.component";
import { ProfileCompanyComponent } from "./company/profile-company.component";
import { ProfileCompanyDetailComponent } from "./company/profile-company-detail.component";

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileConfigComponent,
    ProfileStudentComponent,
    ProfileStudentDetailComponent,
    ProfileStudentAcademicComponent,
    ProfileStudentExperienceComponent,
    ProfileStudentLanguageComponent,
    ProfileCompanyComponent,
    ProfileCompanyDetailComponent
  ],
  imports: [CommonModule, ProfileRoutingModule, ReactiveFormsModule]
})
export class ProfileModule {}
