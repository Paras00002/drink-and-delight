package com.dnd.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dnd.user.model.User;
import com.dnd.user.model.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class UserController {

	 @Autowired
	 private UserService service;
	 
	 @PostMapping("/adduser")
	 public User addUser(@RequestBody User uu) {
	      return service.addUser(uu);
	 }
	 @GetMapping()
	 public java.util.List<User> getall() {
	      return service.getUsers();
	 }
	 @GetMapping("/{id}")
	 public User fetchbyid(@PathVariable int id) {
	      return service.getUserById(id);
	 }	 
	 
	 @PutMapping("/updateuser")
	 public User updateUser(@RequestBody User uu) {
	      return service.addUser(uu);
	 }
}
