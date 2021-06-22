package Homework;

public class Person1 extends Person{
	
	private double stud_id;
	private String subj1;
	private String subj2;
	private String subj3;
	private String major;
	
	public void set_stud_id(double num) {
		this.stud_id=num;
	}
	public void set_subj1(String temp) {
		this.subj1 = temp;
	}
	
	public void set_subj2(String temp2) {
		this.subj2=temp2;
	}
	
	public void set_subj3(String temp3) {
		this.subj3=temp3;
	}
	
	public void set_major(String temp4) {
		this.major=temp4;
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

