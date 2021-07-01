package com.example.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.Spy;

public interface repository extends JpaRepository<Spy, Integer>{

}
