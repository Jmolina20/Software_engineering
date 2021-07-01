package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.repository.repository;
import com.example.model.Spy;

import java.util.List;



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class Controller {

	@Autowired
	private repository spyrepo;
	
	@GetMapping("/spies")
	public List<Spy> getAllspies(){
		return spyrepo.findAll();
	}
	
	
	
	
}
