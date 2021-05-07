import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { ResetComponent } from './auth/component/reset/reset.component';

const routes: Routes = [
  {path : "", pathMatch : 'full' , redirectTo : "/"},
  {path : "" , component: HomeComponent},
  {path : "shop", component : ShopComponent},
  {path : "cart",component : CartComponent},
  {path : "auth",component : AuthComponent},
  {path : "login",component : LoginComponent},
  {path : "register",component : RegisterComponent},
  {path : "reset",component : ResetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
