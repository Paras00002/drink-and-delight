import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  fetchAllProducts(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  addProduct(product: Product): Observable<any> {
    throw new Error('Method not implemented.');
  }

  constructor() {}
}
