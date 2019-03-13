import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile-config.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileConfigComponent implements OnInit {

  constructor(private fb: FormBuilder) { 
    this.addNotifications();
  }

  notifications = [
    {id:1, name: 'Bizkaia'},
    {id:2, name: 'Gipuzkoa'},
    {id:3, name: 'Araba'}
  ]

  profileConfigForm = this.fb.group({
    language: [""],
    selectall: [""],
    notifications: new FormArray([])
  });

  ngOnInit() {}

  get f() {
    return this.profileConfigForm.controls;
  }

  save() {
    console.log("Guardar formulario", this.profileConfigForm.value);
  }

  private addNotifications(){
    this.notifications.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.profileConfigForm.controls.notifications as FormArray).push(control);
    });
  }

  handleSelected($event) {
    if ($event.target.checked === true) {
      var st = [];
      for (var i = 1; i <= (this.profileConfigForm.get('notifications') as FormArray).length; i++) {
        st.push(true);
      }
      this.profileConfigForm.get('notifications').setValue(st);
    }
    else {
      var st = [];
      for (var i = 1; i <= (this.profileConfigForm.get('notifications') as FormArray).length; i++) {
        st.push(false);
      }
      this.profileConfigForm.get('notifications').setValue(st);
    }
 }
}
