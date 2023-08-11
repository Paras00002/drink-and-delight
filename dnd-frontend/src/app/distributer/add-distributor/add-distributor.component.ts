import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistributorService } from 'src/app/services/distributor.service';
import { Distributor } from 'src/app/models/distributor.model';

@Component({
  selector: 'app-add-distributor',
  templateUrl: './add-distributor.component.html',
  styleUrls: ['./add-distributor.component.css'],
})
export class AddDistributorComponent implements OnInit {
  distributor!: Distributor;
  // submitted: boolean = false;
  constructor(private service: DistributorService, private router: Router) {
    this.distributor = new Distributor();
  }

  ngOnInit(): void {}

  addDistributor() {
    // this.service.addDistributor(this.distributor).subscribe((res: any) => {
    //   this.router.navigate(['/dashboard/distributors']);
    // });
    // this.submitted = true;
  }
}
