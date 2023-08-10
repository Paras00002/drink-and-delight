<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

=======
import { Component } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> 5b2cb0ac59714f625bc2d8c042a948ab18278b92
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css'],
})
export class UpdateSupplierComponent {
  id!: number;
  supplier!: Supplier;
  constructor(
    //private route: ActivatedRoute,
    private service: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.supplier = new Supplier();

    //this.id = this.route.snapshot.params['id'];

    this.service.fetchById(this.id);
    // .subscribe(
    //   (data: Supplier) => {
    //     console.log(data);
    //     this.supplier = data;
    //   },
    //   (error: any) => console.log(error)
    // );
  }

<<<<<<< HEAD
  updateSupplier() {
    this.service.updateSupplier(this.supplier);
    // .subscribe(
    //   (data:Supplier) => {
    //     console.log(data);
    //     this.supplier = new Supplier();
    //     this.gotoList();
    //   },
    //   (error:any) => console.log(error)
    // );
=======
  updateSupplier():Observable<any> {
    this.service.updateSupplier(this.supplier).subscribe(
      (data:Supplier) => {
        console.log(data);
        this.supplier = new Supplier();
        this.gotoList();
      },
      (error:any) => console.log(error)
    );
>>>>>>> 5b2cb0ac59714f625bc2d8c042a948ab18278b92
  }
  onSubmit() {
    this.updateSupplier();
  }

  gotoList() {
    this.router.navigate(['/dashboard/suppliers']);
  }
}
