 /*import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; */
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-confirm',
  template: `
    <h1 matDialogTitle></h1>
    <div mat-dialog-content> </div>
    <div mat-dialog-actions>
      <button
        type="button"
        mat-raised-button
        color="primary"
      >
        OK
      </button>
      &nbsp;
      <span fxFlex></span>
      <button
        type="button"
        color="accent"
        mat-raised-button
      >
        Cancel
      </button>
    </div>
  `
})
export class AppComfirmComponent {
  constructor() /*  public dialogRef: MatDialogRef<AppComfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any */
  {}
}
