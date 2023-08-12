import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateStatusComponent } from 'src/app/shared/update-status/update-status.component';
import { RawmaterialOrderService } from 'src/app/services/rawmaterial-order.service';
import { LoadingService } from 'src/app/services/loading.service';
import { RawMaterialOrder } from 'src/app/models/rawmaterial-order.model';

@Component({
  selector: 'app-view-raw-material-orders',
  templateUrl: './view-raw-material-orders.component.html',
  styleUrls: ['./view-raw-material-orders.component.css'],
})
export class ViewRawMaterialOrdersComponent implements OnInit {
changePageSize(_t37: number) {
throw new Error('Method not implemented.');
}
  rawMaterialOrders: RawMaterialOrder[] = [];

  constructor(
    private rawMaterialOrderService: RawmaterialOrderService,
    public loadingService: LoadingService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchAllRawMaterials();
  }

  fetchAllRawMaterials() {
    // You need to implement this method to fetch raw material orders from your service.
    // Example:
    // this.rawMaterialOrderService.fetchAllRawMaterialOrders()
    //   .subscribe((response: RawMaterialOrder[]) => {
    //     this.rawMaterialOrders = response;
    //     this.loadingService.disableLoading();
    //   });
  }

  doFilter(filterValue: any) {
    // Implement the filter logic here
    // Example:
    // const searchTerm = filterValue.target.value.trim().toLowerCase();
    // this.filteredRawMaterialOrders = this.rawMaterialOrders.filter(order =>
    //   order.materialName.toLowerCase().includes(searchTerm)
    // );
  }

  updateStatus(element: any) {
    const dialogRef = this.dialogRef.open(UpdateStatusComponent, {
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.fetchAllRawMaterials();
    });
  }
}
