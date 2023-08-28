package com.pro.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pro.model.Product;
import com.pro.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")


public class ProductController {
	 @Autowired
	    private ProductService service; 

	 @PostMapping("/addproduct")
	 public Product addProduct(@RequestBody Product ss)
	 {
	    return service.addProduct(ss);
	 }

	 @GetMapping ()
	 public java.util.List<Product> getall()
	 {
	    return service.getProduct();
	 }
	 @GetMapping("/{id}")
	 public Product getbyId(@PathVariable int id) {
		 return service.getProductById(id);
	 }
	 @PutMapping("/updateproduct")
	 public Product updateProduct(@RequestBody Product ss) {
	    return service.addProduct(ss);
	 }
	 
	 
	 @GetMapping("/hello")
	 public String hello()
	 {
		 return "hello";
	 }
	    
}
