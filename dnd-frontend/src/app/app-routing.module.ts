import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';

const routes: Routes = [
  // {path:'profile',component:CustomaerComponent},
   {path:'suppliers',component:AddSupplierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
