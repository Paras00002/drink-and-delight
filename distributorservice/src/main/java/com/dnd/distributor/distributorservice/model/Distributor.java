package com.dnd.distributor.distributorservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;


@Data
@Entity
public class Distributor {
    @Id
    @GeneratedValue
    private int distributorId;
    private String name;
    private String location;
    private String phoneNo;
}