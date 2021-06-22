package com.example.Start;
import java.util.Scanner;
public class Computer {
	Scanner scan = new Scanner(System.in);
	private int pub_year;
	private String brand;
	
	Computer(){}
	
	public int getPub_year() {
		return pub_year;
	}
	public void setPub_year() {
		System.out.println("Enter the year of publication");
		this.pub_year = scan.nextInt();
		scan.nextLine();
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand() {
		System.out.println("Enter the brand name of the computer");
		this.brand = scan.nextLine();
		scan.nextLine();
	}
	
	
}
