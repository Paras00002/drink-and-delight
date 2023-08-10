import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { UserComponent } from './user/user.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './supplier/view-supplier/view-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddSupplierComponent,
    ViewSupplierComponent,
    UpdateSupplierComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
