package Homework;
import java.util.Scanner;

interface Person_interface{
	static final String org_name="test";
	public void Hello_world();
	public void calculate();
}

public class Person {
	//public static void main(String[] args) {}
	Scanner scan = new Scanner(System.in);
	static String org_name;
	int age;
	double num;
	String name;	
	 
	public Person () {
		setAge();
		setName();
	}

	public int getAge() {
		return age;
	}

	public void setAge() {
		System.out.println("Enter the age of the person:");
		this.age = scan.nextInt();
		scan.nextLine();
	}


	public String getName() {
		return name;
	}

	public void setName() {
		System.out.println("Enter the person's name:");
		this.name = scan.nextLine();
		scan.nextLine();
	}

	public double calculate(int temp) {
		num = temp;
		return num;
	}
	
	public void Hello_world() {
		System.out.println("Hello World!");
	}
}
