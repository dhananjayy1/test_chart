import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutes } from './login.routing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, LoginRoutes,FormsModule,ReactiveFormsModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
