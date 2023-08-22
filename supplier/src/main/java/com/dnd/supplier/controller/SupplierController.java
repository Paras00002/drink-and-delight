package com.dnd.supplier.controller;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dnd.supplier.model.Supplier;
import com.dnd.supplier.services.SupplierService;

@RestController
@RequestMapping("/supplier")
@CrossOrigin("http://localhost:4200")

public class SupplierController {
   @Autowired
   private SupplierService service;

   @PostMapping("/addsupplier")
   public Supplier addSupplier(@RequestBody Supplier ss) {
      return service.addSupplier(ss);
   }

   @GetMapping()
   public java.util.List<Supplier> getall() {
      return service.getSuppliers();
   }

   @GetMapping("/{id}")
   public Supplier fetchbyid(@PathVariable int id) {
      return service.getSupplierById(id);

   }

   @PutMapping("/updatesupplier")
   public Supplier updateSupplier(@RequestBody Supplier ss) {
      return service.addSupplier(ss);
   }

}
