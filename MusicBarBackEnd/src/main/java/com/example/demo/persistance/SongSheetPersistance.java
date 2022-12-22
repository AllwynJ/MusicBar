package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.SongSheet;

public interface SongSheetPersistance extends JpaRepository<SongSheet, Integer> {

}
