import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Distributor } from 'src/app/models/distributor.model';
import { ProductOrderRequest } from 'src/app/models/product-order-request';
import { Product } from 'src/app/models/product.model';
import { DistributorService } from 'src/app/services/distributor.service';
import { ProductOrderService } from 'src/app/services/product-order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-products-orders',
  templateUrl: './add-products-orders.component.html',
  styleUrls: ['./add-products-orders.component.css'],
})
export class AddProductsOrdersComponent {
  productOrderRequest: any;
  distributor: Distributor[] = [
    {
      distributorId: 1,
      name: 'ABC Distributors',
      location: 'City A',
      phoneNo: '123-456-7890',
    },
    {
      distributorId: 2,
      name: 'XYZ Distributors',
      location: 'City B',
      phoneNo: '987-654-3210',
    },
    // Add more distributors as needed
  ];
  distributorId!: number;
  productId!: number;
  orderStatus!: string;
  products: Product[] = [
    {
      materialName: 'Product 1',
      productId: 1,
      description: 'Description 1',
      quantityAvailable: 100,
      quantityUnit: 'Litre',
      warehouse: {
        warehouseId: 1,
        name: 'Warehouse 1',
        description: 'hw',
      },
    },
    {
      materialName: 'Product 2',
      productId: 2,
      description: 'Description 2',
      quantityAvailable: 150,
      quantityUnit: 'Kilogram',
      warehouse: {
        warehouseId: 2,
        name: 'Warehouse 2',
        description: 'ss',
      },
    },
    // Add more products as needed
  ];
  unit: string = 'Select Product';
  validationDate = new Date().toISOString().slice(0, 10);
  quantity!: string;
  price!: string;

  constructor(
    private productOrderService: ProductOrderService,
    private productService: ProductService,
    private router: Router,
    private distributorService: DistributorService
  ) {
    this.productOrderRequest = new ProductOrderRequest();
  }

  ngOnInit() {
    this.distributorService
      .fetchAllDistributors()
      .subscribe((response: Distributor[]) => {
        this.distributor = response;
        console.log(this.distributor);
      });
    this.productService.fetchAllProducts().subscribe((response: Product[]) => {
      this.products = response;
    });
    console.log('addproductcompoennt');
  }

  getSelectedOptionText(event: any) {
    this.distributorId = event.target.value;
  }

  selectProduct(productId: any) {
    this.productId = productId;
    const selectedProduct = this.products.find((p) => p.productId == productId);
    if (selectedProduct) {
      this.unit = selectedProduct.quantityUnit;
    } else {
      // Handle the case where the product with the given ID is not found
      console.log('nahi hau');
      this.unit = 'N/A'; // Set a default value
    }
  }

  placeOrder() {
    this.productOrderRequest.productId = this.productId;
    this.productOrderRequest.quantity = Number(this.quantity);
    this.productOrderRequest.pricePerUnit = Number(this.price);
    this.productOrderRequest.qualityCheck = 'Passed';
    this.productOrderRequest.distributorId = this.distributorId;
    this.productOrderService
      .createProductOrderRequest(this.productOrderRequest)
      .subscribe((x) => {
        this.router.navigate(['/dashboard/productorders']);
      });
  }
}
