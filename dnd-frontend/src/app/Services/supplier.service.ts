import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supplier } from '../models/supplier.model';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  serviceUrl =
    environment.protocol +
    environment.applicationUrl +
    '/' +
    environment.supplierService;

  constructor(private http: HttpClient) {}

  fetchAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>('http://localhost:8081/supplier');
  }

  addSupplier(formData: Supplier): Observable<Supplier>  {
    console.log('product add service called ');
    return this.http.post<Supplier>('http://localhost:8081/supplier/addsupplier', formData);
  }

  updateSupplier(formData: any): Observable<any> {
    return this.http.put('http://localhost:8081/supplier/updatesupplier', formData);
  }

  fetchById(id: any): Observable<any>  {
    return this.http.get('http://localhost:8081/supplier/' + id);
  }
}
