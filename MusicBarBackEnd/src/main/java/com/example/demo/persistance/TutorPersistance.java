package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Tutor;

public interface TutorPersistance extends JpaRepository<Tutor, Integer> {

}
