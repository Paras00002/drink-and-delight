package com.productorder.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class ProductOrder {
	 @Id
	    @GeneratedValue
	   private int productOrderId;
	   private int quantity;
	   private int pricePerUnit;
	   private String qualityCheck;
	   private String orderStatus;
	   private String deliveryDate;
	   private String manufactureDate;
	   private String expiryDate;
	   private String orderedOn;
	   private int productId;
	   private String productName;
	   private String description;
	   private int distributorId;
	   private String distributorName;
	   private String measurementUnit;
	   private String warehouse;
}
