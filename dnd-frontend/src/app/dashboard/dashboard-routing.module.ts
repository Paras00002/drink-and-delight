import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSupplierComponent } from '../supplier/view-supplier/view-supplier.component';
import { DashboardComponent } from './dashboard.component';
import { AddSupplierComponent } from '../supplier/add-supplier/add-supplier.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'suppliers',
        component: ViewSupplierComponent,

        children: [{ path: 'addsupplier', component: AddSupplierComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
