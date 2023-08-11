import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddSupplierComponent } from '../supplier/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from '../supplier/view-supplier/view-supplier.component';
import { UpdateSupplierComponent } from '../supplier/update-supplier/update-supplier.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from './dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddDistributorComponent } from '../distributer/add-distributor/add-distributor.component';
import { ViewDistributorComponent } from '../distributer/view-distributor/view-distributor.component';
import { UpdateDistributorComponent } from '../distributer/update-distributor/update-distributor.component';

import { UpdateStatusComponent } from '../shared/update-status/update-status.component';
import { ViewProductOrdersComponent } from '../products/view-product-orders/view-product-orders.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewProductsComponent } from '../products/view-products/view-products.component';

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
    // AddProductComponent,
    UpdateStatusComponent,
    ViewProductOrdersComponent,
    ViewProductsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule,
    // SharedModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    // MatTableDataSource,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class DashboardModule {}
