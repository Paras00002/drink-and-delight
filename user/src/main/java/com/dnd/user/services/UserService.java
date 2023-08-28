package com.dnd.user.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dnd.user.dao.UserDao;
import com.dnd.user.model.User;

@Service
public class UserService {
     @Autowired
	 private UserDao repo;
     
     public User addUser(User uu) {
    	    return repo.save(uu);
     }
     
     public List<User> getUsers() {
    	    return repo.findAll();
     }
     
     public User getUserById(int id) {
    	    return repo.findById(id).orElseThrow();
     }
}
