package com.dnd.distributor.distributorservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dnd.distributor.distributorservice.model.Distributor;
import com.dnd.distributor.distributorservice.service.DistributorService;

@RestController
@RequestMapping("/distributor")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")


public class DistributorController {
    @Autowired
    private DistributorService service; 

 @PostMapping("/adddistributor")
 public Distributor addDistributor(@RequestBody Distributor ss)
 {
    return service.addDistributor(ss);
 }

 @GetMapping ()
 public java.util.List<Distributor> getall()
 {
    return service.getDistributors();
 }
 @GetMapping("/{id}")
 public Distributor getbyId(@PathVariable int id) {
	 return service.getDistributorById(id);
 }
 @PutMapping("/updatedistributor")
 public Distributor updateDistributor(@RequestBody Distributor ss) {
    return service.addDistributor(ss);
 }
 
 
 @GetMapping("/hello")
 public String hello()
 {
	 return "hello";
 }
    
}