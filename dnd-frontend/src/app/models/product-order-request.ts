export class ProductOrderRequest {
  productId!: number;
  quantity!: number;
  pricePerUnit!: number;
  qualityCheck!: string;
  deliveryDate!: string;
  expiryDate!: string;
  manufactureDate!: string;
  distributorId!: number;
}
