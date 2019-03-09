import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  rememberPasswordForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]]
  });

  ngOnInit() {}
}
