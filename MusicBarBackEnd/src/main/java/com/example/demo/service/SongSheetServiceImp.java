package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.SongSheet;
import com.example.demo.persistance.SongSheetPersistance;

import jakarta.transaction.Transactional;

@Service
public class SongSheetServiceImp {
	
	private SongSheetPersistance sssep;

    @Autowired
    public SongSheetServiceImp(SongSheetPersistance sssep) {
        this.sssep = sssep;
    }

    @Transactional // data transfer between layers
    public List<SongSheet> findAll() {
        // TODO Auto-generated method stub
        return sssep.findAll();
    }

    @Transactional
    public SongSheet findById(int sId) {
        // TODO Auto-generated method stub
        return sssep.findById(sId).get();
    }

    @Transactional
    public void save(SongSheet songsheet) {
        sssep.save(songsheet);
    }

    @Transactional
    public void deleteById(int sId) {
        sssep.deleteById(sId);
    }

}
