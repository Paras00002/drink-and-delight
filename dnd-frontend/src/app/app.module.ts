import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { UserComponent } from './user/user.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './supplier/view-supplier/view-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddSupplierComponent,
    ViewSupplierComponent,
    UpdateSupplierComponent,
    DashboardComponent,
    NavBarComponent,
  
    EditProfileComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
