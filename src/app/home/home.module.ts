import { MessageAlertModule } from './../components/message-alert/message-alert.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, SigninComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, MessageAlertModule],
  exports: [HomeComponent],
})
export class HomeModule {}
