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
  dataSource: UserDetails[] = [];
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
    this.manageUserService.fetchAllUsers()
      .subscribe((response: any) => {
        this.dataSource = response;
        console.log("🤦‍♀️🤦‍♀️🙌🙌😒")
      });
  }

  doFilter(filterValue: any) {
    // Implement your custom filter logic here
    // For example, you can use Array.filter() to filter data
  }

  ngOnDestroy(): void {
    // this.userSubscription.unsubscribe();
  }
}
