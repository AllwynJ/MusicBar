package com.example.demo.service;

import java.util.List;


import com.example.demo.entity.SongSheet;

public interface SongSheetService {
	public List<SongSheet> findAll(); 
	public SongSheet findById(int sId);
	public void save(SongSheet songSheet); 
	public void deleteById(int sId); 
	
}
