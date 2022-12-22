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

import com.example.demo.entity.OrdersBy;
import com.example.demo.service.OrdersByServiceImp;

@RestController
@RequestMapping("/api")
public class OrdersByController {
	private OrdersByServiceImp odser;

	@Autowired
	public OrdersByController(OrdersByServiceImp odser) {
		this.odser = odser;
	}

	@GetMapping("/orders") 
	public List<OrdersBy> findAllEmployees()
	{
		return odser.findAll();
	}

	@GetMapping("/orders/{orderId}")
	public OrdersBy getEmployee(@PathVariable int orderId)
	{
		OrdersBy ordersby=odser.findById(orderId);
		if(ordersby==null)
			throw new RuntimeException("Employee not exsisted with this id "+orderId);
	 return ordersby;
	}
	
	@GetMapping("/ordersbyid/{userId}")
	public List<OrdersBy> getOrdersByUserId(@PathVariable int userId)
	{
		List<OrdersBy> ordersby =odser.findAllByUserId(userId);
		if(ordersby==null)
			throw new RuntimeException("Oders not exsisted with this id "+userId);
	 return ordersby;
	}

	@PostMapping("/orders")
	public OrdersBy addEmployee(@RequestBody OrdersBy ordersby)
	{
		odser.save(ordersby);
		return ordersby;
	}

	@PutMapping("/orders")
	public OrdersBy updateEmployee(@RequestBody OrdersBy ordersby)
	{   
		
		odser.save(ordersby);
		return ordersby;
	}

	@DeleteMapping("/orders/{orderId}")
	public String deleteEmployee(@PathVariable int orderId)
	{
		OrdersBy ordersby=odser.findById(orderId);
		if(ordersby==null)
			throw new RuntimeException("Employee not exsisted with this id "+orderId);
		odser.deleteById(orderId);
		return "Deleted Employee Id is: "+orderId;
	}
}
