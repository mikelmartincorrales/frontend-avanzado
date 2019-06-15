import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from '../../shared/shared.module';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
//import {MatButtonModule} from '@angular/material/button';
//import { MaterialModule } from '@angular/material';
import { MaterialModuleModule } from '../../shared/material-module/material-module.module';
import { HeaderComponent } from '../../shared/header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [SigninComponent, HeaderComponent],
  imports: [SharedModule, SigninRoutingModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MaterialModuleModule, AngularFontAwesomeModule],
  providers: []
})
export class SigninModule {}
