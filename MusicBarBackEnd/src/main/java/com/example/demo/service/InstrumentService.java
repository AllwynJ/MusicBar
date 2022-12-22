package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Instrument;

public interface InstrumentService {
	public List<Instrument> findAll();
	public Instrument findById(int inId); 
	public void save(Instrument istrument); 
	public void deleteById(int inId); 
}
