package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Instrument;
import com.example.demo.persistance.InstrumentPersistance;

import jakarta.transaction.Transactional;


@Service
public class InstrumentServiceImp {
	
	private InstrumentPersistance insrep;

    @Autowired
	public InstrumentServiceImp(InstrumentPersistance insrep) {
		this.insrep = insrep;
	}

	@Transactional //data transfer between layers
	public List<Instrument> findAll() {
		// TODO Auto-generated method stub
		return insrep.findAll();
	}

	@Transactional
	public Instrument findById(int inId) {
		// TODO Auto-generated method stub
		return insrep.findById(inId).get();
	}

	@Transactional
	public void save(Instrument instrument) {
		insrep.save(instrument);
	}

	@Transactional
	public void deleteById(int inId) {
		insrep.deleteById(inId);
	}
}
