import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddSupplierComponent } from '../supplier/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from '../supplier/view-supplier/view-supplier.component';
import { UpdateSupplierComponent } from '../supplier/update-supplier/update-supplier.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddDistributorComponent } from '../distributer/add-distributor/add-distributor.component';
import { ViewDistributorComponent } from '../distributer/view-distributor/view-distributor.component';
import { UpdateDistributorComponent } from '../distributer/update-distributor/update-distributor.component';

@NgModule({
  declarations: [
    AddSupplierComponent,
    ViewSupplierComponent,
    UpdateSupplierComponent,
    DashboardComponent,
    AuthComponent,
    NavBarComponent,
    AddDistributorComponent,
    ViewDistributorComponent,
    UpdateDistributorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule,
    SharedModule,
  ],
})
export class DashboardModule {}
