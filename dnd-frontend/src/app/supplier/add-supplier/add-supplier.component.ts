import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/Services/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {

  supplier:Supplier;

  constructor(private service: SupplierService , router:Router)
  {
    this.supplier=new Supplier();
  }

  addSupplier()
  {
    this.service.addSupplier(this.supplier)
  }
}
