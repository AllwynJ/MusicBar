package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.OrdersBy;

public interface OrdersByService {
	public List<OrdersBy> findAll(); 
	public OrdersBy findById(int oId); 
	public void save(OrdersBy ordersBy); 
	public void deleteById(int oId); 
	public List<OrdersBy> findAllByUserId(int uId);
}
