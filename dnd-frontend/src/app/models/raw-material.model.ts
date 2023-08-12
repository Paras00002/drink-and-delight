import { Warehouse } from './warehouse.model';

export class RawMaterial {
  materialName: string = '';
  rawMaterialId: number = 0;
  description: string = '';
  quantityAvailable: number = 0;
  quantityUnit: string = '';
  warehouse!: Warehouse;
}
