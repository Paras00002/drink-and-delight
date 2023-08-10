import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/Services/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent {

  supplier:Supplier;

  constructor(private service:SupplierService, router:Router) {
    this.supplier=new Supplier();
  }

  updateSupplier()
  {

  }
}
