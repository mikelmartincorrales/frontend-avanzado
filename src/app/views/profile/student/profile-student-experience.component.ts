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
    titletype: ["", Validators.required],
    university: this.fb.group({
      universitycentre: [""],
      universitytitle: [""],
      universitytitledate: [
        "",
        Validators.pattern("^\\d{1,2}/\\d{1,2}/\\d{4}$")
      ],
      universitybiling: [""],
      universitycert: [""]
    }),
    cicle: this.fb.group({
      ciclecentre: [""],
      ciclefamily: [""],
      ciclegrade: [""],
      cicletitle: [""],
      cicletitledate: ["", Validators.pattern("^\\d{1,2}/\\d{1,2}/\\d{4}$")],
      cicledual: [""],
      ciclebiling: [""],
      ciclecert: [""]
    }),
    other: this.fb.group({
      othertitle: [""]
    })
  });

  ngOnInit() {
    this.profileStudentExperienceForm
      .get("titletype")
      .valueChanges.subscribe((titletype: string) => {
        this.profileStudentExperienceForm
          .get("university")
          .get("universitytitle")
          .setValidators(null);
        this.profileStudentExperienceForm
          .get("cicle")
          .get("cicletitle")
          .updateValueAndValidity();
          this.profileStudentExperienceForm
          .get("cicle")
          .get("cicletitle")
          .setValidators(null);
        this.profileStudentExperienceForm
          .get("other")
          .get("othertitle")
          .updateValueAndValidity();
          this.profileStudentExperienceForm
          .get("other")
          .get("othertitle")
          .setValidators(null);
        this.profileStudentExperienceForm
          .get("university")
          .get("universitytitle")
          .updateValueAndValidity();
        if (titletype === "university") {
          this.profileStudentExperienceForm
            .get("university")
            .get("universitytitle")
            .setValidators([Validators.required]);
          this.profileStudentExperienceForm
            .get("university")
            .get("universitytitle")
            .updateValueAndValidity();
        } else if (titletype === "cicle") {
          this.profileStudentExperienceForm
            .get("cicle")
            .get("cicletitle")
            .setValidators([Validators.required]);
          this.profileStudentExperienceForm
            .get("cicle")
            .get("cicletitle")
            .updateValueAndValidity();
        } else if (titletype === "other") {
          this.profileStudentExperienceForm
            .get("other")
            .get("othertitle")
            .setValidators([Validators.required]);
          this.profileStudentExperienceForm
            .get("other")
            .get("othertitle")
            .updateValueAndValidity();
        }
      });
  }

  get f() {
    return this.profileStudentExperienceForm.controls;
  }

  save() {
    console.log("Guardar formulario", this.profileStudentExperienceForm.value);
  }
}
