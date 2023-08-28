package com.productorder.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.productorder.model.ProductOrder;



@Repository
public interface ProductOrderDao extends JpaRepository<ProductOrder,Integer> {

}
