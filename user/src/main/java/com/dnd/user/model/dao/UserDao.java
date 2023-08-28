package com.dnd.user.model.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dnd.user.model.User;

public interface UserDao extends JpaRepository<User,Integer>{

}
