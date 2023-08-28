package com.dnd.user.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
  @Id
  @GeneratedValue
  private int userId;
  private String username;
  private String role;
  private String designation;
  private String gender;
  private String emailId;
  private String phoneNo;
  private String dob;
  private String address;
  private String firstName;
  private String lastName;
}

