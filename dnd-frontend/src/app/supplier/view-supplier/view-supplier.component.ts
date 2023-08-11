import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.css'],
})
export class ViewSupplierComponent implements OnInit {
  supplier!: Supplier;
  suppliers: Supplier[] = [
    {
      supplierId: 1,
      name: 'Supplier A',
      location: 'Location X',
      phoneNo: '123-456-7890',
    },
    {
      supplierId: 2,
      name: 'Supplier B',
      location: 'Location Y',
      phoneNo: '987-654-3210',
    },
    {
      supplierId: 3,
      name: 'Supplier C',
      location: 'Location Z',
      phoneNo: '555-555-5555',
    },
    // Add more Supplier objects here
  ];
  role: any = 'Admin';
  constructor(private service: SupplierService, private router: Router) {}
  ngOnInit(): void {
    this.service.fetchAllSupplier();
    // .subscribe((res:Supplier[])=>{
    //   this.suppliers=res;
    // })
  }
  reload() {}
  updateSupplier(id: any) {}
}
