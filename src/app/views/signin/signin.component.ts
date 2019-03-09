import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../shared/services/users.service";
import { FormControl } from "@angular/forms";
import { User } from "../../shared/models/User";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  constructor(private _usersService: UsersService) {}

  public users: User[] = [];

  ngOnInit() {
    this._usersService.getUsers().subscribe(response => {
      this.users = response;
      console.log(response);
    });
  }
}
