import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SigninService } from "./signin.service";
import { ProfileService } from "src/app/shared/services/profile.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../shared/state/root.state";
import { Login } from "src/app/shared/state/user/actions/user.actions";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errorLogin = false;
  constructor(
    private signinService: SigninService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private _store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        "carlos.caballero@gmail.com",
        [Validators.email, Validators.required]
      ],
      password: ["1234", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this._store.dispatch(new Login({ ...this.loginForm.value }));

    this.signinService.login({ ...this.loginForm.value }).then(user => {
      if (!user) {
        this.errorLogin = true;
        return;
      }
      this.profileService.user = user;
      this.router.navigate(["admin/dashboard"]);
    });
  }
}
