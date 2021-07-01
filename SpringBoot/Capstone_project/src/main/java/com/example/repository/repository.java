package com.example.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.Spy;


public interface repository extends JpaRepository<Spy, Integer>{

	List<Spy>findBySpy(String name);
	
}
