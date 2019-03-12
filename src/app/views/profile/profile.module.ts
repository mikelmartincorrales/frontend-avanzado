import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { ProfileStudentComponent } from "./student/profile-student.component";
import { ProfileStudentDetailComponent } from "./student/profile-student-detail.component";
import { ProfileStudentAcademicComponent } from "./student/profile-student-academic.component";
import { ProfileCompanyComponent } from "./company/profile-company.component";

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileStudentComponent,
    ProfileStudentDetailComponent,
    ProfileCompanyComponent,
    ProfileStudentAcademicComponent
  ],
  imports: [CommonModule, ProfileRoutingModule, ReactiveFormsModule]
})
export class ProfileModule {}
