import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile-company-detail.component.html",
  styleUrls: ["../profile.component.scss"]
})
export class ProfileCompanyDetailComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  profileCompanyDetailForm = this.fb.group({
    commercialname: [
      "",
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
        Validators.pattern("^[a-zA-Z0-9_-][a-zA-Z0-9_s-]+$")
      ]
    ],
    rs: [
      "",
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
        Validators.pattern("^[a-zA-Z0-9_-][a-zA-Z0-9_s-]+$")
      ]
    ],
    cif: [""],
    addressgroup: this.fb.group({
      address: [""],
      state: [""],
      city: [""]
    }),
    contact: this.fb.group({
      name: [""],
      phone: [""],
      email: ["", Validators.email],
    })
  });

  ngOnInit() {}

  get f() {
    return this.profileCompanyDetailForm.controls;
  }

  save() {
    console.log("Guardar formulario", this.profileCompanyDetailForm.value);
  }
}
