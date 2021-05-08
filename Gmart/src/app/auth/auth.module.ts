import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';


import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ResetComponent } from './component/reset/reset.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    
  ],

  exports : [
    LoginComponent,
    RegisterComponent,
    ResetComponent,
  ]

})
export class AuthModule { }
