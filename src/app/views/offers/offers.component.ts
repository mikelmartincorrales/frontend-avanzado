import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  offersForm = this.fb.group({
    job: ["", Validators.required],
    description: [""],
    state: [""],
    city: [""],
    family: [""],
    titles: [""]
  });

  ngOnInit() {
  }

  save() {
    console.log("Guardar formulario", this.offersForm.value);
  }
}
