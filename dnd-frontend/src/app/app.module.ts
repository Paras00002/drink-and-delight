import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsComponent } from './models/models.component';
import { UserComponent } from './user/user.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './supplier/view-supplier/view-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupplierComponent } from './supplier/supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
    UserComponent,
    AddSupplierComponent,
    ViewSupplierComponent,
    UpdateSupplierComponent,
    DashboardComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
