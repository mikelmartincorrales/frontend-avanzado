import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */

// COMPONENTS
import { AppComfirmComponent } from './services/app-confirm/app-confirm.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { MaterialModuleModule } from './material-module/material-module.module';

// DIRECTIVES
import { FontSizeDirective } from './directives/fontsize.directive';
import { FooterComponent } from './footer/footer.component';
// PIPES

// SERVICES
import { AppConfirmService } from './services/app-confirm/app-confirm.service';

const declarations = [AppComfirmComponent, AdminLayoutComponent, FontSizeDirective, FooterComponent];
const exports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  AppComfirmComponent,
  AdminLayoutComponent
];
const providers = [AppConfirmService];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MaterialModuleModule],
  entryComponents: [AppComfirmComponent],
  providers,
  declarations,
  exports
})
export class SharedModule {}
