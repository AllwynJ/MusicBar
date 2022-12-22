package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Instrument;

public interface InstrumentPersistance extends JpaRepository<Instrument, Integer> {

}
