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

import com.example.demo.entity.Tutor;
import com.example.demo.service.TutorServiceImp;


@RestController
@RequestMapping("/api")
public class TutorController {
	private TutorServiceImp tser;

	@Autowired
	public TutorController(TutorServiceImp tser) {
		this.tser = tser;
	}

	@GetMapping("/tutor") 
	public List<Tutor> findAllEmployees()
	{
		return tser.findAll();
	}



	@GetMapping("/tutor/{tutorId}")
	public Tutor getEmployee(@PathVariable int tutorId)
	{
		Tutor tutor=tser.findById(tutorId);
		if(tutor==null)
			throw new RuntimeException("Tutor not exsisted with this id "+tutorId);
	 return tutor;
	}

	@PostMapping("/tutor")
	public Tutor addEmployee(@RequestBody Tutor tutor)
	{
		tutor.settId(0);
		tser.save(tutor);
		return tutor;
	}

	@PutMapping("/tutor")
	public Tutor updateEmployee(@RequestBody Tutor tutor)
	{   
		
		tser.save(tutor);
		return tutor;
	}

	@DeleteMapping("/tutor/{tutorId}")
	public String deleteEmployee(@PathVariable int tutorId)
	{
		Tutor tutor=tser.findById(tutorId);
		if(tutor==null)
			throw new RuntimeException("Employee not exsisted with this id "+tutorId);
		tser.deleteById(tutorId);
		return "Deleted Employee Id is: "+tutorId;
	}
}
