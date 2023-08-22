package com.dnd.supplier.model;

// import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Supplier {
    @Id
    @GeneratedValue
    private int supplierId;
    private String name;
    private String location;
    private String phoneNo;
}
