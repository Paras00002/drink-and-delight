package com.productorder.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.productorder.model.ProductOrder;
import com.productorder.service.ProductOrderService;

@RestController
@RequestMapping("/productorder")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")

public class ProductOrderController {
	 @Autowired
	    private ProductOrderService service; 

	 @PostMapping("/addproductorder")
	 public ProductOrder addProductOrder(@RequestBody ProductOrder ss)
	 {
	    return service.addProductOrder(ss);
	 }

	 @GetMapping ()
	 public java.util.List<ProductOrder> getall()
	 {
	    return service.getProductOrder();
	 }
	 @GetMapping("/{id}")
	 public ProductOrder getbyId(@PathVariable int id) {
		 return service.getProductOrderById(id);
	 }
	 @PutMapping("/updateproductorder")
	 public ProductOrder updateProductOrder(@RequestBody ProductOrder ss) {
	    return service.addProductOrder(ss);
	 }
	 
	 
	 @GetMapping("/hello")
	 public String hello()
	 {
		 return "hello";
	 }
	    

}
