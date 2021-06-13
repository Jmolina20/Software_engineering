package Homework;
import java.util.Scanner;

interface Person_interface{
	static final String org_name;
	public void age_set();
	public void name_set();
}

public class Person {
	//public static void main(String[] args) {}
	Scanner scan = new Scanner(System.in);
	int age;
	String name;	

	 
	public Person () {
		age_set();
	
	}
	public void age_set() {
		System.out.println("Enter the age for the person you're describing:");
		scan.nextline
		
	}

	public void name_set(String temp2) {
		this.name=temp2;
	}
}
