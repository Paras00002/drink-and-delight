import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loading = false;

  constructor() {}

  enableLoading() {
    this.loading = true;
  }

  disableLoading() {
    this.loading = false;
  }
}