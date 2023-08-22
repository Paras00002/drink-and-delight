import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier.model';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css'],
})
export class AddSupplierComponent {
  @Input() supplier: Supplier;

  constructor(private service: SupplierService, router: Router) {
    this.supplier = new Supplier();
  }

  addSupplier() {
    this.service.addSupplier(this.supplier).subscribe((Response:Supplier)=>{console.log(Response);console.log("niiga")})
    
  }
}
