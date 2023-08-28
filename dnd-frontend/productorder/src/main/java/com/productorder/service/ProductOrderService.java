package com.productorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productorder.dao.ProductOrderDao;
import com.productorder.model.ProductOrder;


@Service
public class ProductOrderService {
	@Autowired
	  private ProductOrderDao repository;

	  
	  public ProductOrder addProductOrder(ProductOrder ss) {
	    return repository.save(ss);
	  }

	 
	  public List<ProductOrder> getProductOrder() {
	    return repository.findAll();
	  }
	  public ProductOrder getProductOrderById(int id) {
		    return repository.findById(id).orElseThrow();
		  }
	  public ProductOrder updateProductOrder(ProductOrder dss) {
		  return repository.save(dss);
	  }
}
