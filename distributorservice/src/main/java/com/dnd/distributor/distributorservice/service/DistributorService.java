package com.dnd.distributor.distributorservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dnd.distributor.distributorservice.dao.DistributorDao;
import com.dnd.distributor.distributorservice.model.Distributor;

@Service
public class DistributorService {
    
@Autowired
  private DistributorDao repository;

  
  public Distributor addDistributor(Distributor ss) {
    return repository.save(ss);
  }

 
  public List<Distributor> getDistributors() {
    return repository.findAll();
  }
  public Distributor getDistributorById(int id) {
	    return repository.findById(id).orElseThrow();
	  }
  public Distributor updateDistributor(Distributor dss) {
	  return repository.save(dss);
  }
}
