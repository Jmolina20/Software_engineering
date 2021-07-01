package com.example.Capstone_project.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Capstone_project.model.Spy;
import org.springframework.stereotype.Repository;

@Repository
public interface spyrepository extends JpaRepository<Spy, Integer>{

	List<Spy>findBySpy(String name);
	
}
