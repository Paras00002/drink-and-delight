import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductOrderService {
  createProductOrderRequest(productOrderRequest: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  fetchAllProductOrders(): Observable<any> {
    throw new Error('Method not implemented.');
  }

  constructor() {}
}
