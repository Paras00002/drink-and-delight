import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsComponent } from './models/models.component';
import { UserComponent } from './user/user.component';
<<<<<<< Updated upstream
=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupplierComponent } from './supplier/supplier.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
<<<<<<< Updated upstream
    UserComponent
=======
    UserComponent,
    DashboardComponent,
    SupplierComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
