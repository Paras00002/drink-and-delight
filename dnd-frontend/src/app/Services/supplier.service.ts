import { Supplier } from "../models/supplier.model";

export class SupplierService {

  serviceUrl =""

  constructor(private http :HttpClient) {
    
  }
  updateSupplier(supplier: Supplier) {
    throw new Error('Method not implemented.');
  }
  fetchById(id: number) {
    throw new Error('Method not implemented.');
  }
  fetchAllSupplier() {
    throw new Error('Method not implemented.');
  }
  addSupplier(formData: Supplier) {
    formData;
  }
}
