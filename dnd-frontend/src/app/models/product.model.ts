import { Warehouse } from './warehouse.model';

export class Product {
  productId!: number;
  materialName!: string;
  description!: string;
  quantityAvailable!: number;
  quantityUnit!: any;
  warehouse!: Warehouse;
}
