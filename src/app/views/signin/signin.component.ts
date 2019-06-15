import * as AuthActions from '../../shared/states/auth/actions/auth.actions';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppStore } from '../../shared/states/store.interface';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errorLogin = false;
  constructor(private store$: Store<AppStore>) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required /* , Validators.minLength(8) */
      ]),
      rememberMe: new FormControl(false)
    });
  }

  onSubmit() {
    this.submitted = true;
    this.store$.dispatch(
      new AuthActions.Identification({ ...this.loginForm.value })
    );
  }
}
