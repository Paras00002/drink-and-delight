package com.dnd.user.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dnd.user.model.User;
import com.dnd.user.model.dao.UserDao;

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
