import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductOrder } from 'src/app/models/product-order.model';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductOrderService } from 'src/app/services/product-order.service';
import { UpdateStatusComponent } from 'src/app/shared/update-status/update-status.component';

@Component({
  selector: 'app-view-product-orders',
  templateUrl: './view-product-orders.component.html',
  styleUrls: ['./view-product-orders.component.css'],
})
export class ViewProductOrdersComponent implements OnInit {
  myDate = new Date(); // Replace with your actual Date object
  formattedDate = this.myDate.toISOString();
  dataSource: ProductOrder[] = [
    
   
    // Add more data entries here
  ];

  displayedColumns: string[] = [
    'productOrderId',
    'productName',
    'pricePerUnit',
    'orderedOn',
    'distributorName',
    'quantity',
    'orderStatus',
  ];
  userSubscription!: Subscription;

  constructor(
    private productOrderService: ProductOrderService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    // Fetching data from service could be done here if needed
    this.fetchAllProductOrders();
    console.log('viewproductcomponent');
  }

  fetchAllProductOrders() {
    // this.loadingService.enableLoading();
    this.userSubscription = this.productOrderService
      .fetchAllProductOrders()
      .subscribe((response: ProductOrder[]) => {
        this.dataSource = response; 
        console.log(response[1]);
        // this.loadingService.disableLoading();
      });
  }

  doFilter(event: any) {
    // Implement filtering logic here
  }

  ngOnDestroy(): void {
    // this.userSubscription.unsubscribe();
  }

  updateStatus(element: any) {
    // Implement update status logic here
  }

  prevPage() {
    // Implement previous page logic here
  }

  nextPage() {
    // Implement next page logic here
  }

  totalPages(): number {
    // Implement total pages logic here
    return 0;
  }
}
