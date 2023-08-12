import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(
    private supplierService: SupplierService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.role = this.authService.getRole();
    this.supplierService
      .fetchAllSuppliers()
      .subscribe((response: Supplier[]) => {
        this.suppliers = response;
      });
  }
  reload() {
    this.router.navigate(['/dashboard/suppliers']);
  }

  updateSupplier(id: number) {
    this.router.navigate(['/dashboard/updatesupplier', id]);
  }
}
