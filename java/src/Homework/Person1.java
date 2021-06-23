package Homework;
import java.util.Scanner;

public class Person1 extends Person{
	Scanner scan = new Scanner(System.in);
	private String middle_name;

	
	
	public String getMiddle_name() {
		return middle_name;
	}

	public void setMiddle_name() {
		System.out.println("Enter their middle name: ");
		this.middle_name = scan.nextLine();
		scan.nextLine();
	}
	
	

}

