package com.example.Start;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringStarterProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringStarterProjectApplication.class, args);
		System.out.println("Hello world");
		Laptop lenovo = new Laptop();
		lenovo.setBrand("Lenovo");
		System.out.println("The laptop brand is " + lenovo.getBrand());
		lenovo.setPub_year(2010);
		System.out.println("The laptop publication year is " + lenovo.getPub_year());
		
	}

}
