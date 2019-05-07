import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [SharedModule, SigninRoutingModule, MaterialModule],
  providers: []
})
export class SigninModule { }
