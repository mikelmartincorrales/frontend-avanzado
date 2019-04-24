import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MockData } from "src/app/shared/mock-data";
import {
  Language,
  LanguageLevel,
  LanguageName
} from "src/app/shared/models/language.model";
import { dateValidator } from "src/app/shared/directives/date-validator.directive";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../../shared/state/root.state";
import { selectUser } from "../../../../shared/state/user/selectors/user.selectors";
import { UpdateUser } from "src/app/shared/state/user/actions/user.actions";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: "app-profile-language",
  templateUrl: "./profile-language.component.html",
  styleUrls: ["./profile-language.component.scss"]
})
export class ProfileLanguageComponent implements OnInit {
  rForm: FormGroup;
  language: Language = {} as Language;
  languageLevels: LanguageLevel[];
  languageNames: LanguageName[];
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _store: Store<AppState>
  ) {
    this.route.params.subscribe(params => {
      this._store.pipe(select(selectUser)).subscribe(u => (this.user = u));
      const uid = +params.uid;
      this.language = (this.user.languages.find(
        language => language.uid === uid
      ) || {}) as Language;
    });
  }
  ngOnInit() {
    this.loadSelectProperties();
    this.loadFormInstance();
  }
  public loadSelectProperties(): void {
    this.languageLevels = MockData.LANGUAGES_LEVEL;
    this.languageNames = MockData.LANGUAGES_NAME;
  }

  public loadFormInstance(): void {
    this.rForm = new FormGroup({
      level: new FormControl(this.language.level, [Validators.required]),
      name: new FormControl(this.language.name, [Validators.required]),
      date: new FormControl(this.language.date, [
        Validators.required,
        dateValidator()
      ])
    });
  }
  public submit() {
    this.saveOrUpdate({ ...this.language, ...this.rForm.value });
  }

  compareLevel(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  compareName(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(language: Language) {
    this._store.pipe(select(selectUser)).subscribe(u => (this.user = u));
    const languages = this.user.languages;
    const foundIndex = languages.findIndex(
      _language => _language.uid === language.uid
    );
    languages[foundIndex] = language;
    this._store.dispatch(new UpdateUser({ ...this.user }));
    this.router.navigate(["/admin/profile"]);
  }
  private save(language: Language) {
    this._store.pipe(select(selectUser)).subscribe(u => (this.user = u));
    const _language = MockData.fakeIncreaseID<Language>(
      this.user.languages,
      language
    );
    this.user.languages = [...this.user.languages, _language];
    this._store.dispatch(new UpdateUser({ ...this.user }));
    this.router.navigate(["/admin/profile"]);
  }

  saveOrUpdate(language: Language) {
    this.isNew() ? this.save(language) : this.update(language);
  }
  public isNew(): boolean {
    return !!!this.language.uid;
  }
}
