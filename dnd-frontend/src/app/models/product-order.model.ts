import { Warehouse } from './warehouse.model';

export class ProductOrder {
  productOrderId!: number;
  quantity!: number;
  pricePerUnit!: number;
  qualityCheck!: string;
  orderStatus!: string;
  deliveryDate!: string;
  manufactureDate!: string;
  expiryDate!: string;
  orderedOn!: string;
  productId!: number;
  productName!: string;
  description!: string;
  distributorId!: number;
  distributorName!: string;
  measurementUnit!: string;
  warehouse!: Warehouse;
}
