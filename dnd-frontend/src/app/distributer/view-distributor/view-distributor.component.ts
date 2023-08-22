import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DistributorService } from 'src/app/services/distributor.service';
import { Distributor } from 'src/app/models/distributor.model';

@Component({
  selector: 'app-view-distributor',
  templateUrl: './view-distributor.component.html',
  styleUrls: ['./view-distributor.component.css'],
})
export class ViewDistributorComponent implements OnInit {
  //  ids!: number;
  distributor!: Distributor;
  distributors!: Distributor[];
  role: any = 'Admin';
  constructor(
    private distributorService: DistributorService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.role = this.authService.getRole();
    this.distributorService
      .fetchAllDistributors()
      .subscribe((response: Distributor[]) => {
        this.distributors = response;
        console.log(response);
      });
  }

  updateDistributor(id: number) {
    console.log(id);
    // Need to do this with query params
    this.router.navigate([
      '/dashboard/updatedistributor',
      id,
      // { queryParams: { ids: id } },
    ]);
  }
}
