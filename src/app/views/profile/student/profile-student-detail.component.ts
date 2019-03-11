import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import {
  dniValidator,
  passportValidator
} from "../../../shared/validators/document.validator";

@Component({
  selector: "app-profile",
  templateUrl: "./profile-student-detail.component.html",
  styleUrls: ["../profile.component.scss"]
})
export class ProfileStudentDetailComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  profileStudentDetailForm = this.fb.group({
    firstname: [
      "",
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
        Validators.pattern("^[a-zA-Z0-9_-][a-zA-Z0-9_s-]+$")
      ]
    ],
    lastname: [
      "",
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
        Validators.pattern("^[a-zA-Z0-9_-][a-zA-Z0-9_s-]+$")
      ]
    ],
    avatar: [""],
    birthdate: ["", Validators.pattern("^d{2}/d{2}/d{4}$")],
    phone: [""],
    phone2: [""],
    doctype: [""],
    docnum: [""],
    addressgroup: this.fb.group({
      address: [""],
      state: [""],
      city: [""]
    }),
    moreinfo: this.fb.group({
      about: [""],
      competencies: [""],
      drivinglicense: [""]
    })
  });

  ngOnInit() {
    this.profileStudentDetailForm.get("doctype").valueChanges.subscribe((doctype: string) => {
      if (doctype === "NIF/NIE") {
        this.profileStudentDetailForm
          .get("docnum")
          .setValidators([dniValidator]);
        
      } else if (doctype === "Pasaporte"){
        this.profileStudentDetailForm
          .get("docnum")
          .setValidators([passportValidator]);
      } else {
        this.profileStudentDetailForm.get("docnum").setValidators(null);
      }
      this.profileStudentDetailForm.get("docnum").updateValueAndValidity();
    });
  }

  get f() {
    return this.profileStudentDetailForm.controls;
  }

  save() {
    console.log("Guardar formulario", this.profileStudentDetailForm.value);
  }
}
