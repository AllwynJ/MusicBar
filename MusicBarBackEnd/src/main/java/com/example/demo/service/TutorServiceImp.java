package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Tutor;
import com.example.demo.persistance.TutorPersistance;

import jakarta.transaction.Transactional;

@Service
public class TutorServiceImp {
	
	private TutorPersistance tser;

    @Autowired
    public TutorServiceImp(TutorPersistance tser) {
        this.tser = tser;
    }

    @Transactional // data transfer between layers
    public List<Tutor> findAll() {
        // TODO Auto-generated method stub
        return tser.findAll();
    }

    @Transactional
    public Tutor findById(int tId) {
        // TODO Auto-generated method stub
        return tser.findById(tId).get();
    }

    @Transactional
    public void save(Tutor tutor) {
        tser.save(tutor);
    }

    @Transactional
    public void deleteById(int tId) {
        tser.deleteById(tId);
    }
}
