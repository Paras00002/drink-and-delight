import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { DistributorService } from 'src/app/Services/distributor.service';
import { Distributor } from 'src/app/models/distributor.model';

@Component({
  selector: 'app-view-distributor',
  templateUrl: './view-distributor.component.html',
  styleUrls: ['./view-distributor.component.css'],
})
export class ViewDistributorComponent implements OnInit {
  jsonDistributorData = [
    {
      distributorId: 1,
      name: 'Distributor A',
      location: 'Location A',
      phoneNo: '123-456-7890',
    },
    {
      distributorId: 2,
      name: 'Distributor B',
      location: 'Location B',
      phoneNo: '987-654-3210',
    },
    {
      distributorId: 3,
      name: 'Distributor C',
      location: 'Location C',
      phoneNo: '555-555-5555',
    },
    {
      distributorId: 4,
      name: 'Distributor D',
      location: 'Location D',
      phoneNo: '777-777-7777',
    },
    // ... more distributor data
  ];
  //  ids!: number;
  distributor!: Distributor;
  distributors: Distributor[] = [];
  role: any = 'Admin';
  constructor(
    private distributorService: DistributorService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.role = this.authService.getRole();
    // this.distributorService.fetchAllDistributors();
    console.log(this.jsonDistributorData);
    // .subscribe((response: Distributor[]) => {
    //   this.distributors = response;
    // });

    this.distributors = this.jsonDistributorData.map((distributorData) => {
      const distributor = new Distributor();
      distributor.distributorId = distributorData.distributorId;
      distributor.name = distributorData.name;
      distributor.location = distributorData.location;
      distributor.phoneNo = distributorData.phoneNo;
      return distributor;
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
