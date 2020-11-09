import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StyleComponent } from './style/style.component';
import { StyleshowComponent } from './styleshow/styleshow.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { MaterialComponent } from './material/material.component';
import { MaterialshowComponent } from './materialshow/materialshow.component';

const routes: Routes = [
  {
    path: '', component : HomeComponent, pathMatch: 'full'
  },
  {
    path: 'style/:details', component : StyleComponent
  },
  {
    path: 'style/:details/show', component : StyleshowComponent
  },
  {
    path: 'cart', component : CartComponent
  },
  {
    path: 'checkout', component : CheckoutComponent
  },
  {
    path: 'about', component : AboutComponent
  },
  {
    path: 'material/:details', component : MaterialComponent
  },
  {
    path: 'material/:details/show', component : MaterialshowComponent
  }
  
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
