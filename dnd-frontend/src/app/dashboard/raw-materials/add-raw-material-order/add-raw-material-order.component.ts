import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gender } from 'src/app/models/gender.model';
import { RawMaterial } from 'src/app/models/raw-material.model';
import { Supplier } from 'src/app/models/supplier.model';
import { RawmaterialOrderService } from 'src/app/services/rawmaterial-order.service';
import { RawmaterialService } from 'src/app/services/rawmaterial.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-add-raw-material-order',
  templateUrl: './add-raw-material-order.component.html',
  styleUrls: ['./add-raw-material-order.component.css'],
})
export class AddRawMaterialOrderComponent implements OnInit {
  // Declaration of various properties
  genders = Gender; // Likely an enum representing gender, but not used in the provided code
  submitted = false;
  rawMaterialForm!: FormGroup; // Form group to manage form controls
  message = '';
  rawMaterials: RawMaterial[] = [];
  suppliers: Supplier[] = [];
  measurementUnit = 'Select Raw Material';

  // Constructor that initializes the component and its dependencies
  constructor(
    private rawMateriOrderService: RawmaterialOrderService,
    private router: Router,
    private rawMaterialService: RawmaterialService,
    private supplierService: SupplierService
  ) {
    this.initForm(); // Initializes the form controls and validators
    this.initSupplierDropdown(); // Fetches suppliers and populates the supplier dropdown
    this.initRawmterialDropdown(); // Fetches raw materials and populates the raw material dropdown
  }

  // Method to fetch and populate the suppliers dropdown
  initSupplierDropdown() {
    this.supplierService
      .fetchAllSuppliers()
      .subscribe((res: Supplier[]) => (this.suppliers = res));
  }

  // Method to fetch and populate the raw materials dropdown
  initRawmterialDropdown() {
    this.rawMaterialService
      .fetchAllRawmaterials()
      .subscribe((res: RawMaterial[]) => (this.rawMaterials = res));
  }

  // Angular lifecycle hook, ngOnInit is called after the component is initialized
  ngOnInit(): void {}

  // Method called when the form is submitted
  submitForm() {
    this.submitted = true; // Indicates that the form has been submitted
    console.log(this.rawMaterialForm.value);

    // If the form is valid, create a raw material order request
    if (this.rawMaterialForm.valid)
      this.createRawMaterial(this.rawMaterialForm.value);
  }

  // Method to send a request for creating a raw material order
  createRawMaterial(formData: any) {
    this.rawMateriOrderService
      .createRawMaterialOrderRequest(formData)
      .subscribe(
        (response) => {
          // Success callback: Display a success message and navigate after a delay
          // this.message =
          //   'Successfully purchased Raw Material with Order ID ' +
          //   response['rawMaterialId'];
          setTimeout(() => {
            this.router.navigateByUrl('/dashboard/rawmaterialorders');
          }, 3000);
        },
        (error) => {
          // Error callback: Handle server validation errors or throw an error
          console.log(error);
          if (error.error.message === 'FieldException')
            error.error.errors.forEach((element: any) =>
              this.rawMaterialForm.controls[element.field]?.setErrors({
                serverValidationError: element.message,
              })
            );
          else throw new Error(error);
        }
      );
  }

  // Method to initialize the form controls and validators
  initForm() {
    this.rawMaterialForm = new FormGroup({
      rawMaterialId: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      pricePerUnit: new FormControl('', [Validators.required]),
      qualityCheck: new FormControl('', [Validators.required]),
      deliveryDate: new FormControl('', [Validators.required]),
      expiryDate: new FormControl('', [Validators.required]),
      supplierId: new FormControl('', [Validators.required]),
    });
  }

  // Method to update the measurement unit based on the selected raw material
  updateUnit(id: any) {
    this.measurementUnit = this.rawMaterials.find(
      (rm) => rm.rawMaterialId == id
    )!.quantityUnit;
  }
}
