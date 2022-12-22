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

import com.example.demo.entity.SongSheet;
import com.example.demo.service.SongSheetServiceImp;

@RestController
@RequestMapping("/api")
public class SongSheetController {
	private SongSheetServiceImp sssep;

    @Autowired
    public SongSheetController(SongSheetServiceImp sssep) {
        this.sssep = sssep;
    }

    @GetMapping("/songsheets")
    public List<SongSheet> findAllEmployees() {
        return sssep.findAll();
    }

    @GetMapping("/songsheets/{songsheetId}")
    public SongSheet getEmployee(@PathVariable int songsheetId) {
        SongSheet songsheets = sssep.findById(songsheetId);
        if (songsheets == null)
            throw new RuntimeException("Employee not exsisted with this id " + songsheetId);
        return songsheets;
    }

    @PostMapping("/songsheets")
    public SongSheet addEmployee(@RequestBody SongSheet songsheets) {
        sssep.save(songsheets);
        return songsheets;
    }

    @PutMapping("/songsheets")
    public SongSheet updateEmployee(@RequestBody SongSheet songsheets) {

        sssep.save(songsheets);
        return songsheets;
    }

    @DeleteMapping("/songsheets/{songsheetsId}")
    public String deleteEmployee(@PathVariable int songsheetId) {
        SongSheet songsheets = sssep.findById(songsheetId);
        if (songsheets == null)
            throw new RuntimeException("Employee not exsisted with this id " + songsheetId);
        sssep.deleteById(songsheetId);
        return "Deleted Employee Id is: " + songsheetId;
    }
}
