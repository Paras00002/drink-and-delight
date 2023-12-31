import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  products: Product[] = [

  ];
  role: any = 'Admin';

  constructor(
    private productService: ProductService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
 
    this.productService.fetchAllProducts().subscribe((data: Product[]) => {
      this.products = data;
      console.log("😂")
    });
  }

  navigate(): void {
    this.router.navigate(['/dashboard/addproduct']);
  }
}
