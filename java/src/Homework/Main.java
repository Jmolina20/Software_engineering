package Homework;

public class Main {

	public static void main(String[] args) {
		Person p1 = new Person();
		System.out.println("P1's name is " + p1.getName());
		System.out.println("P1's age is " + p1.getAge());
		Employee e1 = new Employee();
		System.out.println("E1's name is " + e1.name);
		System.out.println("E1's age is " + e1.getAge());
		e1.setSalary();
		System.out.println("E1's salary is " + e1.getSalary());
		Student s1 = new Student();
		s1.set_major();
		s1.set_subj1();
		s1.set_subj2();
		s1.set_subj3();
		s1.set_stud_id();
		System.out.println("S1's name is " + s1.name);
		System.out.println("S1 is a student and their major is " + s1.get_major());
		System.out.println("S1's schedule is the following: " + s1.get_subj1() + " , " + s1.get_subj2() + " , " + s1.get_subj3());
		System.out.println("S1's student id is " + s1.get_stud_id());
		Person1 p2 = new Person1();
		p2.calculate(20);
		p2.Hello_world();
		p2.setMiddle_name();
		System.out.println("P2's middle name is " + p2.getMiddle_name());
		
	}

}
