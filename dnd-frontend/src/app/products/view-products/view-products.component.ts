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
    {
      materialName: 'Material A',
      productId: 1,
      description: 'Description for Material A',
      quantityAvailable: 100,
      quantityUnit: 'unit',
      warehouse: {
        warehouseId: 123,
        name: 'Warehouse X',
        description: 'Location Y',
      },
    },
    {
      materialName: 'Material A',
      productId: 1,
      description: 'Description for Material A',
      quantityAvailable: 100,
      quantityUnit: 'unit',
      warehouse: {
        warehouseId: 123,
        name: 'Warehouse X',
        description: 'Location Y',
      },
    },
    {
      materialName: 'Material A',
      productId: 1,
      description: 'Description for Material A',
      quantityAvailable: 100,
      quantityUnit: 'unit',
      warehouse: {
        warehouseId: 123,
        name: 'Warehouse X',
        description: 'Location Y',
      },
    },
    {
      materialName: 'Material A',
      productId: 1,
      description: 'Description for Material A',
      quantityAvailable: 100,
      quantityUnit: 'unit',
      warehouse: {
        warehouseId: 123,
        name: 'Warehouse X',
        description: 'Location Y',
      },
    },
    {
      materialName: 'Material A',
      productId: 1,
      description: 'Description for Material A',
      quantityAvailable: 100,
      quantityUnit: 'unit',
      warehouse: {
        warehouseId: 123,
        name: 'Warehouse X',
        description: 'Location Y',
      },
    },
  ];
  role: any = 'Admin';

  constructor(
    private productService: ProductService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.role = this.authService.getRole();
    this.productService.fetchAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  navigate(): void {
    this.router.navigate(['/dashboard/addproduct']);
  }
}
