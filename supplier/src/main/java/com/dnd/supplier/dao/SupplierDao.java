package com.dnd.supplier.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dnd.supplier.model.Supplier;

@Repository
public interface SupplierDao extends JpaRepository<Supplier,Integer> {
    
}
