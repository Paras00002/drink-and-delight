package com.dnd.distributor.distributorservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dnd.distributor.distributorservice.model.Distributor;

@Repository
public interface DistributorDao extends JpaRepository<Distributor,Integer> {
    
}
