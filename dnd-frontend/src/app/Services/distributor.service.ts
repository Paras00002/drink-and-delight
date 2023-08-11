import { Injectable } from '@angular/core';
import { Distributor } from '../models/distributor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DistributorService {
  updateDistributor(distributor: Distributor): Observable<any> {
    throw new Error('Method not implemented.');
  }
  fetchById(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  addDistributor(distributor: Distributor): Observable<any> {
    throw new Error('Method not implemented.');
  }
  fetchAllDistributors(): Observable<any> {
    throw new Error('Method not implemented.');
  }

  constructor() {}
}
