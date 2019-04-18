import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import {
  Study,
  VocationalStudy,
  CollegeStudy
} from "src/app/shared/models/study.model";
import { MockData } from "src/app/shared/mock-data";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../../shared/state/root.state";
import { selectUser } from "../../../../shared/state/user/selectors/user.selectors";
import { UpdateUser } from "src/app/shared/state/user/actions/user.actions";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: "app-profile-study",
  templateUrl: "./profile-study.component.html",
  styleUrls: ["./profile-study.component.scss"]
})
export class ProfileStudyComponent {
  studiesForm: FormGroup;
  options = MockData.TYPE_STUDIES;
  study: Study = {} as (VocationalStudy | CollegeStudy);
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _store: Store<AppState>
  ) {
    this.route.params.subscribe(params => {
      this._store.pipe(select(selectUser)).subscribe(u => (this.user = u));
      const uid = +params.uid;
      this.study = (this.user.studies.find(study => study.uid === uid) ||
        {}) as VocationalStudy | CollegeStudy;
    });
    this.studiesForm = new FormGroup({
      option: new FormControl(this.study.level, [Validators.required])
    });
  }

  compareOption(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(study: VocationalStudy | CollegeStudy) {
    this._store.pipe(select(selectUser)).subscribe(u => (this.user = u));
    const studies = this.user.studies;
    const foundIndex = studies.findIndex(_study => _study.uid === study.uid);
    studies[foundIndex] = study;
    this._store.dispatch(new UpdateUser({ ...this.user }));
    this.router.navigate(["/admin/profile"]);
  }
  private save(study: VocationalStudy | CollegeStudy) {
    this._store.pipe(select(selectUser)).subscribe(u => (this.user = u));
    const _study = MockData.fakeIncreaseID<VocationalStudy | CollegeStudy>(
      this.user.studies,
      study
    );
    this.user.studies = [...this.user.studies, _study];
    this._store.dispatch(new UpdateUser({ ...this.user }));
    this.router.navigate(["/admin/profile"]);
  }

  saveOrUpdate(study: VocationalStudy | CollegeStudy) {
    study.level = this.studiesForm.get("option").value;
    this.isNew() ? this.save(study) : this.update(study);
  }
  public isNew(): boolean {
    return !!!this.study.uid;
  }
  public isSelectVocational(): boolean {
    const value = this.studiesForm.get("option").value;
    return value && value.uid === MockData.TYPE_STUDIES[0].uid;
  }
  public isSelectUniversity(): boolean {
    const value = this.studiesForm.get("option").value;
    return value && value.uid === MockData.TYPE_STUDIES[1].uid;
  }
  public backProfile() {
    this.router.navigate(["/admin/profile"]);
  }
}
