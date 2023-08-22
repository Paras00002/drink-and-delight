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
    return this.http.get<Supplier[]>('http://localhost:8080/supplier');
  }

  addSupplier(formData: any) {
    return this.http.post(this.serviceUrl + '/supplier', formData);
  }

  updateSupplier(formData: any) {
    return this.http.put(this.serviceUrl + '/supplier', formData);
  }

  fetchById(id: any) {
    return this.http.get(this.serviceUrl + '/supplier/' + id);
  }
}
