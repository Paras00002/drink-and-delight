package com.pro.model;


import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;


@Data
@Entity
public class Product {
	 @Id
	    @GeneratedValue
	  private int productId;
	 private String materialName;
	  private String description;
	  private int quantityAvailable;
	  private String quantityUnit;
	  private String warehouse;
	}

