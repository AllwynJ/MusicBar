package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.persistance.UserPersistance;

import jakarta.transaction.Transactional;

@Service
public class UserServiceImp {
	
	private UserPersistance usrep;

    @Autowired
	public UserServiceImp(UserPersistance usrep) {
		this.usrep = usrep;
	}

	@Transactional 
	public List<User> findAll() {
		return usrep.findAll();
	}

	@Transactional
	public User findById(int uId) {
		return usrep.findById(uId).get();
	}

	@Transactional
	public void save(User user) {
		usrep.save(user);
	}

	@Transactional
	public void deleteById(int uId) {
		usrep.deleteById(uId);
	}
}
