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

import com.example.demo.entity.Instrument;
import com.example.demo.service.InstrumentServiceImp;

@RestController
@RequestMapping("/api")
public class InstrumentController {
	private InstrumentServiceImp insser;

	@Autowired
	public InstrumentController(InstrumentServiceImp insser) {
		this.insser = insser;
	}

	@GetMapping("/instruments") 
	public List<Instrument> findAllEmployees()
	{
		return insser.findAll();
	}

	@GetMapping("/instruments/{instrumentId}")
	public Instrument getInstrument(@PathVariable int instrumentId)
	{
		Instrument instrument=insser.findById(instrumentId);
		if(instrument==null)
			throw new RuntimeException("Employee not exsisted with this id "+instrumentId);
	 return instrument;
	}

	@PostMapping("/instruments")
	public Instrument addInstrument(@RequestBody Instrument instrument)
	{
		instrument.setInId(0);
		insser.save(instrument);
		return instrument;
	}
	
	@PutMapping("/instruments")
	public Instrument updateInstrument(@RequestBody Instrument instrument)
	{   
		
		insser.save(instrument);
		return instrument;
	}

	@DeleteMapping("/instruments/{instrumentId}")
	public String deleteInstrument(@PathVariable int instrumentId)
	{
		Instrument instrument=insser.findById(instrumentId);
		if(instrument==null)
			throw new RuntimeException("Instrument not exsisted with this id "+instrumentId);
		insser.deleteById(instrumentId);
		return "Deleted Employee Id is: "+instrumentId;
	}
}
