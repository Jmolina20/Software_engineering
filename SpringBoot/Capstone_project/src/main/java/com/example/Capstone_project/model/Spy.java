package com.example.Capstone_project.model;
//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="top_spies")
public class Spy {
	@Id
	private int id;
	//@Column
	private double rating;
	//@Column
	private String name;
	//@Column
	private String skills;
	//@Column
	private String birth_country;
	public Spy() {}
	
	public Spy(int id, double rating, String name, String Birth_country, String skills) 
	{
		super();
		this.id = id;
		this.birth_country=Birth_country;
		this.rating = rating;
		this.name = name;
		this.skills = skills;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id_num) {
		this.id = id_num;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public String getBirth_country() {
		return birth_country;
	}
	public void setBirth_country(String birth_country) {
		this.birth_country = birth_country;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	
	
}
