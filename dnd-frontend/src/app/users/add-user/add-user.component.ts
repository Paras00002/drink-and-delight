
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Gender } from 'src/app/models/gender.model';
import { UserDetails } from 'src/app/models/user-details.model';
import { LoadingService } from 'src/app/services/loading.service';
import { ManageUserService } from 'src/app/services/manage-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  genders = Gender;
  submitted = false;
  userForm!: FormGroup;
  message !: String;
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 14))
    .toISOString()
    .slice(0, 10);
  // new Date().toISOString().slice(0,10) - ;

  constructor(
    private manageUserService: ManageUserService,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  submitForm() {
    this.submitted = true;
    if (this.userForm.valid) this.addUser(this.userForm.value);
    console.log("😘")
    console.log(this.userForm.value)
  }

  addUser(formData: UserDetails) {
    console.log("hshsh")
this.manageUserService
      .addUser(formData)
      .subscribe(
        (response) => {
          console.log("USer Add Hogya");
          this.message =
            'Successfully Created user with ID ' + response['userId'];
          setTimeout(() => {
            this.router.navigateByUrl('/dashboard/users');
          }, 3000);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  initForm() {
    this.userForm = new FormGroup(
      {
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        phoneNo: new FormControl('', [Validators.required]),
        emailId: new FormControl('', [Validators.required]),
        dob: new FormControl('', [Validators.required]),
        designation: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        password2: new FormControl('', [Validators.required]),
        address: new FormGroup('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30)
        ])
      }
    )
  }

  // matchPassword(control: FormControl) {
  //   const password = control.get('password')?.value;
  //   const password2 = control.get('password2')?.value;
  //   if (password != password2) {
  //     control.get('password2')?.setErrors({ passwordMatchError: true });
  //   } else {
  //     return null;
  //   }
  // }
}
