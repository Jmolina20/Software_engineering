package Homework;
import java.util.Scanner;

public class Employee extends Person {
	//public static void main(String[] args) {}
	String company;
	double salary;
	Scanner scan = new Scanner(System.in);
	
	public Employee () {
		super();
	}
	
	public double getSalary() {
		return salary;
	}

	public void setSalary() {
		System.out.println("Enter the person's salary");
		this.salary = scan.nextDouble();
		scan.nextLine();
	}
	
	
	

}
