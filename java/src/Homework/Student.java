package Homework;

import java.util.Scanner;


public class Student extends Person{
	
	Scanner scan = new Scanner(System.in);
	private double stud_id;
	private String subj1;
	private String subj2;
	private String subj3;
	private String major;

	
	public Student() {
		super();
	}
	
	public void set_stud_id() {
		System.out.println("Enter the student id of the student: ");
		this.stud_id=scan.nextDouble();
		scan.nextLine();
	}
	public void set_subj1() {
		System.out.println("Enter the first subject on the student's schedule: ");
		this.subj1 = scan.nextLine();
		scan.nextLine();
	}
	
	public void set_subj2() {
		System.out.println("Enter the second subject on the student's schedule: ");
		this.subj2=scan.nextLine();
		scan.nextLine();
	}
	
	public void set_subj3() {
		System.out.println("Enter the third subject on the student's schedule: ");
		this.subj3=scan.nextLine();
		scan.nextLine();
	}
	
	public void set_major() {
		System.out.println("Enter the major of the student: ");
		this.major=scan.nextLine();
		scan.nextLine();
	}
	
	public double get_stud_id() {
		return(this.stud_id);
	}
	
	
	public String get_subj1() {
		return(this.subj1);
	}
	
	public String get_subj2() {
		return(this.subj2);
	}
	
	public String get_subj3() {
		return(this.subj3);
	}
	
	public String get_major() {
		return(this.major);
	}
	
	
	

}
