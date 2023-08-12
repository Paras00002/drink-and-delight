import { Warehouse } from './warehouse.model';

export class RawMaterialOrder {
  rawMaterialOrderId!: number;
  quantity!: number;
  pricePerUnit!: number;
  qualityCheck!: string;
  orderStatus!: string;
  deliveryDate!: string;
  expiryDate!: string;
  orderedOn!: string;
  materialName!: string;
  description!: string;
  supplierId!: number;
  supplierName!: string;
  measurementUnit!: string;
  warehouse!: Warehouse;
}
