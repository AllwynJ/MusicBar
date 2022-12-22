package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.OrdersBy;
import com.example.demo.persistance.OrdersByPersistance;

import jakarta.transaction.Transactional;

@Service
public class OrdersByServiceImp {
	
	private OrdersByPersistance odrep;

    @Autowired
	public OrdersByServiceImp(OrdersByPersistance odrep) {
		this.odrep = odrep;

	}

	@Transactional //data transfer between layers
	public List<OrdersBy> findAll() {
		// TODO Auto-generated method stub
		return odrep.findAll();
	}

	@Transactional
	public OrdersBy findById(int oId) {
		// TODO Auto-generated method stub
		return odrep.findById(oId).get();
	}

	@Transactional
	public void save(OrdersBy ordersBy) {
		odrep.save(ordersBy);
	}

	@Transactional
	public void deleteById(int oId) {
		odrep.deleteById(oId);
	}
	
	@Transactional //data transfer between layers
	public List<OrdersBy> findAllByUserId(int uId) {
		List<OrdersBy> ord= odrep.findAll();
		OrdersBy orders=new OrdersBy();
		List<OrdersBy> userOrdersList=new ArrayList<OrdersBy>();
		for(int i=0;i<ord.size();i++) {
			orders = ord.get(i);
			if(orders.getuId()==uId) {
				userOrdersList.add(orders);
			}
		}
		return userOrdersList;
	}
}
