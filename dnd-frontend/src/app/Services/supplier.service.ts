import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  serviceUrl = '';

  constructor(private http: HttpClient) {}
  updateSupplier(supplier: Supplier) {
    throw new Error('Method not implemented.');
  }
  fetchById(id: number) {
    throw new Error('Method not implemented.');
  }
  fetchAllSupplier(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  addSupplier(formData: Supplier) {
    formData;
  }
}
