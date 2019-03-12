import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile-student-language.component.html",
  styleUrls: ["../profile.component.scss"]
})
export class ProfileStudentLanguageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  profileStudentLanguageForm = this.fb.group({
    language: ["", Validators.required],
    languageother: ["", [Validators.minLength(3), Validators.maxLength(55)]],
    level: [""],
    date: ["", Validators.pattern("^\\d{1,2}/\\d{1,2}/\\d{4}$")]
  });

  ngOnInit() {
    this.profileStudentLanguageForm
      .get("language")
      .valueChanges.subscribe((language: string) => {
        if (language === "other"){
          this.profileStudentLanguageForm.get("languageother").setValidators([Validators.required]);
        } else {
          this.profileStudentLanguageForm.get("languageother").setValidators(null);
        }
        this.profileStudentLanguageForm.get("languageother").updateValueAndValidity();
      });
  }

  get f() {
    return this.profileStudentLanguageForm.controls;
  }

  save() {
    console.log("Guardar formulario", this.profileStudentLanguageForm.value);
  }
}
