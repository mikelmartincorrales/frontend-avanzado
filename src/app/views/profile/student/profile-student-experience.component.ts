import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile-student-experience.component.html",
  styleUrls: ["../profile.component.scss"]
})
export class ProfileStudentExperienceComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  profileStudentExperienceForm = this.fb.group({
    companie: [
      "",
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
        Validators.pattern("^[a-zA-Z0-9_-][a-zA-Z0-9_s-]+$")
      ]
    ],
    startdate: ["", Validators.pattern("^\\d{1,2}/\\d{1,2}/\\d{4}$")],
    enddate: ["", Validators.pattern("^\\d{1,2}/\\d{1,2}/\\d{4}$")],
    job: [
      "",
      [
        Validators.pattern("^[a-zA-Z0-9_-][a-zA-Z0-9_s-]+$"),
        Validators.minLength(3),
        Validators.maxLength(55)
      ]
    ],
    tasks: [""]
  });

  ngOnInit() {}

  get f() {
    return this.profileStudentExperienceForm.controls;
  }

  save() {
    console.log("Guardar formulario", this.profileStudentExperienceForm.value);
  }
}
