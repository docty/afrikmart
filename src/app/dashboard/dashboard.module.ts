import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StyleComponent } from './style/style.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { MaterialComponent } from './material/material.component';
import { MaterialshowComponent } from './materialshow/materialshow.component';
import { StyleshowComponent } from './styleshow/styleshow.component';






@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, StyleComponent, CartComponent, 
  CheckoutComponent, AboutComponent, MaterialComponent, MaterialshowComponent, StyleshowComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, FormsModule
  ],
  bootstrap: [HomeComponent]
})
export class DashboardModule { }
