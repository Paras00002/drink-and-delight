import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  fetchAllProducts(): Observable<any> {
    
    return this.http.get<Product[]>('http://localhost:8089/product');
  }

  addProduct(product: Product): Observable<Product> {console.log("🌹💋💋👏👏")
    return this.http.post<Product>('http://localhost:8089/product/addproduct',product);
  }

  constructor(private http: HttpClient) {}
}
