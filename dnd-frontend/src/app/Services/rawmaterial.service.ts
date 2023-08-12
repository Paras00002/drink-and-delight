import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RawmaterialService {
  serviceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.stockManagementService}`;

  constructor(private http: HttpClient) {}

  fetchAllRawmaterials(): Observable<any> {
    return this.http.get(this.serviceUrl + '/rawMaterialStock');
  }

  createRawMaterial(formData: any) {
    return this.http.post(this.serviceUrl + '/rawMaterialStock', formData);
  }
}
