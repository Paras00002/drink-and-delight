import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/Services/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.css']
})
export class ViewSupplierComponent implements OnInit {

  supplier:Supplier;
  suppliers:Supplier[];
  role;
  constructor(private service:SupplierService, private router:Router) {
   
  }
  ngOnInit(): void {
 
    this.service.fetchAllSupplier().subscribe((res:Supplier[])=>{
      this.suppliers=res;
    })
  }

 
}
