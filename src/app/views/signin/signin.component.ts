import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../shared/services/users.service";
import { FormBuilder, Validators } from "@angular/forms";
import { User } from "../../shared/models/User";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  constructor(
    private _usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  public users: User[] = [];

  signinForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });

  ngOnInit() {
    // Test del Fake BackEnd
    this._usersService.getUsers().subscribe(response => {
      this.users = response;
      console.log(response);
    });
  }

  //Test del login. Mostrando en consola toda la info del form
  login() {
    console.log(this.signinForm);
    // En este punto validaremo al usuario y si es correcto obtendremos su id
    this.router.navigate(["/admin/dashboard/" + this.users[0].id]);
  }
}
