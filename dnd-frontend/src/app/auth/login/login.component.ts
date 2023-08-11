import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  login2() {
    this.router.navigate(['/dashboard']);
  }
  // loginForm!: FormGroup;
  submitted = false;
  loginSubscription: Subscription | undefined;
  constructor(
    private authService: AuthService,
    private router: Router,
    public loadingService: LoadingService
  ) {}

  ngOnDestroy(): void {
    // if (this.loginSubscription) this.loginSubscription.unsubscribe();
  }

  ngOnInit(): void {
    // this.authService.redirectIfLoggedIn();
    // this.initForm();
  }

  login() {
    // this.submitted = true;
    // if (this.loginForm.valid) this.submitData(this.loginForm.value);
  }

  submitData(formData: any) {
    // this.loadingService.enableLoading();
    // this.loginSubscription = this.authService.login(formData).subscribe(
    //   (response) => {
    //     this.router.navigate(['/dashboard']);
    //     this.loadingService.disableLoading();
    //   },
    //   (error) => {
    //     this.loadingService.disableLoading();
    //     if (error.error.message === 'FieldException')
    //       error.error.errors.forEach((element) =>
    //         this.loginForm.controls[element.field]?.setErrors({
    //           serverValidationError: element.message,
    //         })
    //       );
    //     else throw new Error(error);
    //   }
    // );
    this.router.navigate(['/dashboard']);
  }

  // initForm() {
  //   this.loginForm = new FormGroup({
  //     username: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required]),
  //   });
  // }
}
