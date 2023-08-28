import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductOrder } from '../models/product-order.model';

@Injectable({
  providedIn: 'root',
})
export class ProductOrderService {
  createProductOrderRequest(productorder: any): Observable<any> {
    return this.http.post<ProductOrder>('http://localhost:9090/productorder/addproductorder',productorder);
  }

  // addProductOrder(productorder: ProductOrder): Observable<ProductOrder> {
  //   return this.http.post<ProductOrder>('http://localhost:9090/productorder/addproductorder',productorder);
  // }
  fetchAllProductOrders(): Observable<any> {
    return this.http.get<ProductOrder[]>('http://localhost:9090/productorder');
  }

  constructor(private http: HttpClient) {}
}
