import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DistributorService } from 'src/app/Services/distributor.service';
import { Distributor } from 'src/app/models/distributor.model';

@Component({
  selector: 'app-update-distributor',
  templateUrl: './update-distributor.component.html',
  styleUrls: ['./update-distributor.component.css'],
})
export class UpdateDistributorComponent implements OnInit {
  // Declare properties
  id!: number; // Stores the ID of the distributor being updated
  distributor!: Distributor; // Holds the distributor data

  // Constructor with dependency injection
  constructor(
    private route: ActivatedRoute, // Provides access to route parameters
    private service: DistributorService, // Distributor service for data operations
    private router: Router // Helps with navigation
  ) {}

  // Lifecycle hook: ngOnInit
  ngOnInit(): void {
    // Initialize properties
    this.distributor = new Distributor(); // Create a new Distributor instance

    // Get the 'id' parameter from the route snapshot
    // this.id = this.route.snapshot.params['id'];
    this.route.queryParams.subscribe((qp) => {
      console.log('hell o+' + qp['ids']);
      this.id = +qp['ids'];
    });
    console.log('hellooo ' + this.id);

    // Fetch distributor details by ID from the service
    this.service.fetchById(this.id).subscribe(
      (data: Distributor) => {
        console.log(data); // Log retrieved distributor data
        this.distributor = data; // Assign retrieved data to 'distributor' property
      },
      (error) => console.log(error) // Handle errors by logging them
    );
  }

  // Update distributor details
  updateDistributor() {
    // Call the service's updateDistributor method
    this.service.updateDistributor(this.distributor).subscribe(
      (data) => {
        this.distributor = new Distributor(); // Create a new Distributor instance
        this.gotoList(); // Navigate back to the distributor list
      },
      (error) => console.log(error) // Handle errors by logging them
    );
  }

  // Handle form submission
  onSubmit() {
    this.updateDistributor(); // Call the updateDistributor method
  }

  // Navigate back to the distributor list
  gotoList() {
    this.router.navigate(['/dashboard/distributors']); // Navigate to the specified route
  }
}
