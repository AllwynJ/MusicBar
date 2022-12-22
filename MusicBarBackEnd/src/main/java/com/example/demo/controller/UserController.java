package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserServiceImp;


@RestController
@RequestMapping("/api")
public class UserController {
	private UserServiceImp usser;
	
	@Autowired
	public UserController(UserServiceImp usser) {
		this.usser = usser;
	}

	@GetMapping("/users") 
	public List<User> findAllUsers()
	{
		return usser.findAll();
	}

	@GetMapping("/users/{userId}")
	public User getUser(@PathVariable int userId)
	{
		User user=usser.findById(userId);
		if(user==null)
			throw new RuntimeException("Employee not exsisted with this id "+userId);
	 return user;
	}

	@PostMapping("/users")
	public User addUser(@RequestBody User user)
	{
		usser.save(user);
		return user;
	}

	@PutMapping("/users")
	public User updateUser(@RequestBody User user)
	{   
		
		usser.save(user);
		return user;
	}

	@DeleteMapping("/users/{userId}")
	public User deleteUser(@PathVariable int userId)
	{
		User user=usser.findById(userId);
		if(user==null)
			throw new RuntimeException("Employee not exsisted with this id "+userId);
		usser.deleteById(userId);
		return user;
	}
}
