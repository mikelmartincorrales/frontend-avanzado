import { NgModule } from '@angular/core';

import {
    MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatTableModule
    ]
})
export class MaterialModule { }