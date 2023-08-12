import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserDetails } from 'src/app/models/user-details.model';
import { LoadingService } from 'src/app/services/loading.service';
import { ManageUserService } from 'src/app/services/manage-user.service';
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit, OnDestroy {
  dataSource: UserDetails[] = [
    {
      userId: '1',
      username: 'user1',
      role: 'admin',
      designation: 'Manager',
      gender: 'Male',
      emailId: 'user1@example.com',
      phoneNo: '123-456-7890',
      dob: '1990-01-01',
      address: {
        city: 'Faridabad',
        state: 'Haryana',
        area: 'Sector 1',
        pincode: '121001',
      },
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      userId: '2',
      username: 'user2',
      role: 'user',
      designation: 'Developer',
      gender: 'Female',
      emailId: 'user2@example.com',
      phoneNo: '987-654-3210',
      dob: '1995-05-15',
      address: {
        city: 'Faridabad',
        state: 'Haryana',
        area: 'Sector 2',
        pincode: '121002',
      },
      firstName: 'Jane',
      lastName: 'Smith',
    },
  ];
  displayedColumns: string[] = [
    'userId',
    'username',
    'name',
    'role',
    'phoneNo',
    'city',
    'edit',
  ];
  // userSubscription: Subscription;

  constructor(
    private manageUserService: ManageUserService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  fetchAllUsers() {
    // this.loadingService.enableLoading();
    // this.userSubscription = this.manageUserService
    //   .fetchAllUsers()
    //   .subscribe((response: UserDetails[]) => {
    //     this.dataSource = response;
    //     this.loadingService.disableLoading();
    //   });
  }

  doFilter(filterValue: any) {
    // Implement your custom filter logic here
    // For example, you can use Array.filter() to filter data
  }

  ngOnDestroy(): void {
    // this.userSubscription.unsubscribe();
  }
}
