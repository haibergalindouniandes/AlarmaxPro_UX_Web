import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SigninComponent
  ],
  exports: [
    SigninComponent
  ]
})
export class LoginModule { }
