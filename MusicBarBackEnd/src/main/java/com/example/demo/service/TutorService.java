package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Tutor;

public interface TutorService {
	public List<Tutor> findAll();
	public Tutor findById(int tId); 
	public void save(Tutor tutor);
	public void deleteById(int tId); 
}