package com.dnd.supplier.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
// import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.dnd.supplier.dao.SupplierDao;
import com.dnd.supplier.model.Supplier;

@Service
public class SupplierService {

  @Autowired
  private SupplierDao repository;

  public Supplier addSupplier(Supplier ss) {
    return repository.save(ss);
  }

  public List<Supplier> getSuppliers() {
    return repository.findAll();
  }

  public Supplier getSupplierById(int id) {
    return repository.findById(id).orElseThrow();
  }
}
