import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSupplierComponent } from '../supplier/view-supplier/view-supplier.component';
import { DashboardComponent } from './dashboard.component';
import { AddSupplierComponent } from '../supplier/add-supplier/add-supplier.component';
import { ViewDistributorComponent } from '../distributer/view-distributor/view-distributor.component';
import { AddDistributorComponent } from '../distributer/add-distributor/add-distributor.component';
import { UpdateDistributorComponent } from '../distributer/update-distributor/update-distributor.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'distributors', component: ViewDistributorComponent },
      { path: 'adddistributors', component: AddDistributorComponent },
      { path: 'updatedistributor/:id', component: UpdateDistributorComponent },
      {
        path: 'suppliers',
        component: ViewSupplierComponent,
        children: [],
      },

      { path: 'addsupplier', component: AddSupplierComponent, children: [] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
