import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { UserComponent } from './user/user.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './supplier/view-supplier/view-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { AddRawMaterialComponent } from './raw-materials/add-raw-material/add-raw-material.component';
import { AddRawMaterialOrderComponent } from './raw-materials/add-raw-material-order/add-raw-material-order.component';
import { ViewRawMaterialComponent } from './raw-materials/view-raw-material/view-raw-material.component';
import { ViewRawMaterialOrdersComponent } from './raw-materials/view-raw-material-orders/view-raw-material-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddSupplierComponent,
    ViewSupplierComponent,
    UpdateSupplierComponent,
    DashboardComponent,
    NavBarComponent,
    AddRawMaterialComponent,
    AddRawMaterialOrderComponent,
    ViewRawMaterialComponent,
    ViewRawMaterialOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
