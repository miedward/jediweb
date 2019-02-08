import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginRoutingModule
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
