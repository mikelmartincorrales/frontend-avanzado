import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatTableModule, MatIconModule, MatSidenavModule, MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})

export class MaterialModule { }