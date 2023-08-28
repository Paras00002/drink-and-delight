package com.pro.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pro.dao.ProductDao;
import com.pro.model.Product;



@Service
public class ProductService {
	@Autowired
	  private ProductDao repository;

	  
	  public Product addProduct(Product ss) {
	    return repository.save(ss);
	  }

	 
	  public List<Product> getProduct() {
	    return repository.findAll();
	  }
	  public Product getProductById(int id) {
		    return repository.findById(id).orElseThrow();
		  }
	  public Product updateProduct(Product dss) {
		  return repository.save(dss);
	  }

}
