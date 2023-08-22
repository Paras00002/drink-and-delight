import { Injectable } from '@angular/core';
import { Distributor } from '../models/distributor.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DistributorService {
  updateDistributor(distributor: Distributor): Observable<any> {
    return this.http.put('http://localhost:8080/distributor/updatedistributor', distributor);
  }
  fetchById(id: number): Observable<any> {
    return this.http.get<Distributor>('http://localhost:8080/distributor/' + id);
  }
  addDistributor(distributor: Distributor): Observable<Distributor> {
    return this.http.post<Distributor>('http://localhost:8080/distributor/adddistributor',distributor);
  }
  fetchAllDistributors(): Observable<any> {
    return this.http.get<Distributor[]>('http://localhost:8080/distributor');
  }

  constructor(private http: HttpClient) {}
}
