import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile-student-academic.component.html",
  styleUrls: ["../profile.component.scss"]
})
export class ProfileStudentAcademicComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  profileStudentAcademicForm = this.fb.group({
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
    this.profileStudentAcademicForm
      .get("titletype")
      .valueChanges.subscribe((titletype: string) => {
        this.profileStudentAcademicForm
          .get("university")
          .get("universitytitle")
          .setValidators(null);
        this.profileStudentAcademicForm
          .get("cicle")
          .get("cicletitle")
          .updateValueAndValidity();
          this.profileStudentAcademicForm
          .get("cicle")
          .get("cicletitle")
          .setValidators(null);
        this.profileStudentAcademicForm
          .get("other")
          .get("othertitle")
          .updateValueAndValidity();
          this.profileStudentAcademicForm
          .get("other")
          .get("othertitle")
          .setValidators(null);
        this.profileStudentAcademicForm
          .get("university")
          .get("universitytitle")
          .updateValueAndValidity();
        if (titletype === "university") {
          this.profileStudentAcademicForm
            .get("university")
            .get("universitytitle")
            .setValidators([Validators.required]);
          this.profileStudentAcademicForm
            .get("university")
            .get("universitytitle")
            .updateValueAndValidity();
        } else if (titletype === "cicle") {
          this.profileStudentAcademicForm
            .get("cicle")
            .get("cicletitle")
            .setValidators([Validators.required]);
          this.profileStudentAcademicForm
            .get("cicle")
            .get("cicletitle")
            .updateValueAndValidity();
        } else if (titletype === "other") {
          this.profileStudentAcademicForm
            .get("other")
            .get("othertitle")
            .setValidators([Validators.required]);
          this.profileStudentAcademicForm
            .get("other")
            .get("othertitle")
            .updateValueAndValidity();
        }
      });
  }

  get f() {
    return this.profileStudentAcademicForm.controls;
  }

  save() {
    console.log("Guardar formulario", this.profileStudentAcademicForm.value);
  }
}
