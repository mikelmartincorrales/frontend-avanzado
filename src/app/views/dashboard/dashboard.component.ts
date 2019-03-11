import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../../shared/models/User";
import { switchMap } from "rxjs/operators";
import { UsersService } from "../../shared/services/users.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _usersService: UsersService
  ) {}

  user: User;

  ngOnInit() {
    // Obtener datos del usuario a partir del parámetro "id"
  }
}
