import { Component } from "@angular/core";
import { User } from "src/app/shared/models/user.model";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../shared/state/root.state";
import { selectUser } from "../../../shared/state/user/selectors/user.selectors";
import { UpdateUser } from "src/app/shared/state/user/actions/user.actions";

@Component({
  selector: "app-profile-student",
  templateUrl: "./profile-student.component.html",
  styleUrls: ["./profile-student.component.scss"]
})
export class ProfileStudentComponent {
  constructor(private _store: Store<AppState>) {
    this._store.pipe(select(selectUser)).subscribe(u => (this.user = u));
  }

  user$ = this._store.pipe(select(selectUser));
  user: User;

  deleteStudy(studyID: number) {
    const studies = this.user.studies;
    const index = studies.findIndex(study => study.uid === studyID);
    if (index === -1) {
      alert("Error: Study not found");
      return;
    }
    studies.splice(index, 1);
    this._store.dispatch(new UpdateUser({ ...this.user }));
  }
  deleteLanguage(languageID: any) {
    const languages = this.user.languages;
    const index = languages.findIndex(language => language.uid === languageID);
    if (index === -1) {
      alert("Error: Language not found");
      return;
    }
    languages.splice(index, 1);
    this._store.dispatch(new UpdateUser({ ...this.user }));
  }
}
