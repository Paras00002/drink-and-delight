import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSupplierComponent } from '../supplier/view-supplier/view-supplier.component';
import { DashboardComponent } from './dashboard.component';
import { AddSupplierComponent } from '../supplier/add-supplier/add-supplier.component';
import { ViewDistributorComponent } from '../distributer/view-distributor/view-distributor.component';
import { AddDistributorComponent } from '../distributer/add-distributor/add-distributor.component';
import { UpdateDistributorComponent } from '../distributer/update-distributor/update-distributor.component';
import { ViewProductOrdersComponent } from '../products/view-product-orders/view-product-orders.component';
import { ViewProductsComponent } from '../products/view-products/view-products.component';
import { UpdateSupplierComponent } from '../supplier/update-supplier/update-supplier.component';
import { AddProductComponent } from '../products/add-products/add-products.component';
import { AddProductsOrdersComponent } from '../products/add-products-orders/add-products-orders.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewUsersComponent } from '../users/view-users/view-users.component';
import { AddUserComponent } from '../users/add-user/add-user.component';
import { ViewRawMaterialComponent } from './raw-materials/view-raw-material/view-raw-material.component';
import { AddRawMaterialComponent } from './raw-materials/add-raw-material/add-raw-material.component';
import { ViewRawMaterialOrdersComponent } from './raw-materials/view-raw-material-orders/view-raw-material-orders.component';
import { AddRawMaterialOrderComponent } from './raw-materials/add-raw-material-order/add-raw-material-order.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'distributors', component: ViewDistributorComponent },
      { path: 'adddistributors', component: AddDistributorComponent },
      { path: 'productorders', component: ViewProductOrdersComponent },
      { path: 'addproductorder', component: AddProductsOrdersComponent },
      { path: 'products', component: ViewProductsComponent },
      { path: 'addproduct', component: AddProductComponent },
      { path: 'updatedistributor/:id', component: UpdateDistributorComponent },
      { path: 'updatesupplier/:id', component: UpdateSupplierComponent },
      {
        path: 'suppliers',
        component: ViewSupplierComponent,
        children: [],
      },
      { path: 'viewprofile', component: ViewProfileComponent },
      { path: 'editprofile', component: EditProfileComponent },
      { path: 'addsupplier', component: AddSupplierComponent, children: [] },
      {
        path: 'users',
        component: ViewUsersComponent,
        // canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'adduser',
        component: AddUserComponent,
        // canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'editprofile/:id',
        component: EditProfileComponent,
        // canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      {
        path: 'rawmaterials',
        component: ViewRawMaterialComponent,
      },
      {
        path: 'addrawmaterial',
        component: AddRawMaterialComponent,
        // canActivate: [RoleGuard],
        data: { role: 'Admin' },
      },
      { path: 'rawmaterialorders', component: ViewRawMaterialOrdersComponent },
      { path: 'addrawmaterialorder', component: AddRawMaterialOrderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
