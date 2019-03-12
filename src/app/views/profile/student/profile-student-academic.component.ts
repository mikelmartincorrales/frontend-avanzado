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
    titletype: [""],
    university: this.fb.group({
      universitycentre: [""],
      universitytitle: [""],
      universitytitledate: ["", Validators.pattern("^d{2}/d{2}/d{4}$")],
      universitybiling: [""],
      universitycert: [""]
    }),
    cicle: this.fb.group({
      ciclecentre: [""],
      ciclefamily: [""],
      ciclegrade: [""],
      cicletitle: [""],
      cicletitledate: ["", Validators.pattern("^d{2}/d{2}/d{4}$")],
      cicledual: [""],
      ciclebiling: [""],
      ciclecert: [""]
    }),
    other: this.fb.group({
      othertitle: [""]
    })
  });

  ngOnInit() {}

  get f() {
    return this.profileStudentAcademicForm.controls;
  }

  save() {
    console.log("Guardar formulario", this.profileStudentAcademicForm.value);
  }
}
