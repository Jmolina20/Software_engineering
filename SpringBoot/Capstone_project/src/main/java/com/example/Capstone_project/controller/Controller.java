package com.example.Capstone_project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Capstone_project.exception.resource_not_found_exception;
import com.example.Capstone_project.model.Spy;
import com.example.Capstone_project.repository.spyrepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class Controller {

	@Autowired
	private spyrepository spyrepo;

	@GetMapping("/spies")
	public List<Spy> getAllSpies() {
		return spyrepo.findAll();
	}

	
	  @PostMapping("/addspy") public Spy newSpy(@RequestBody
	  Spy newSpy) { return spyrepo.save(newSpy); }
	  
	  @GetMapping("Spies/{id}") public ResponseEntity<Spy>
	  getSpyById(@PathVariable int id){ Spy newSpy =
	  spyrepo.findById(id).orElseThrow(() -> new
	  resource_not_found_exception("Spy not found")); return
	  ResponseEntity.ok(newSpy); }
	  
	  
	  
	  @DeleteMapping("/deleteSpy/{id}") public String
	  deleteSpy(@PathVariable int id) {
	  spyrepo.findById(id).orElseThrow(() -> new
	  resource_not_found_exception("Spy not found"));
	  spyrepo.deleteById(id); return "The Spy with id " + id +
	  " has been removed from the database."; }
	  
	  @PutMapping("updatespy/{id}") 
	  public ResponseEntity<Spy> updateSpy(@PathVariable int
	  id, @RequestBody Spy temp_Spy){ Spy newSpy =
	  spyrepo.findById(id).orElseThrow(() -> new resource_not_found_exception
	  ("Spy not found")); 
	  newSpy.setRating(temp_Spy.getRating());
	  newSpy.setName(temp_Spy.getName());
	  newSpy.setSkills(temp_Spy.getSkills());
	  newSpy.setBirth_country(temp_Spy.getBirth_country()); Spy updatedSpy =
	  spyrepo.save(newSpy); return ResponseEntity.ok(updatedSpy); }

}
