package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.OrdersBy;

public interface OrdersByPersistance extends JpaRepository<OrdersBy, Integer> {
	
}
