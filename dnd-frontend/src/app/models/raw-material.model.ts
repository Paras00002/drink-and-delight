/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-05 08:58:03
 * @modify date 2020-11-05 08:58:03
 * @desc Raw Material
 */
import { Warehouse } from './warehouse.model';

export class RawMaterial {
  materialName: string='';
  rawMaterialId: number=0;
  description: string='';
  quantityAvailable: number=0;
  quantityUnit: string='';
  warehouse: Warehouse;
}