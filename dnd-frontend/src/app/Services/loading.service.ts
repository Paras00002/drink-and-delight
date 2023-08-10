<<<<<<< HEAD
=======
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-04 20:11:27
 * @modify date 2020-11-04 20:11:27
 * @desc Loading UI status 
 */
>>>>>>> 5b2cb0ac59714f625bc2d8c042a948ab18278b92
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