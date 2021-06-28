package Homework;
import java.util.Scanner;
public class Assignment_1 {

	static int num1, num2, add_sum=0, sub_sum=0, mult_sum=0;
	static double div_sum=0;
	static Scanner scan = new Scanner(System.in);
	public static void main(String[] args) {
		String answer;
		double temp;
		System.out.println("Welcome to the calculator, You have four options today: add, subtract, multiply, divide, exit");
		System.out.println("Enter your selection below:");
		answer = scan.nextLine();
		scan.nextLine();
		switch (answer) {
		case ("add") : {
			temp = calculate_add();
			System.out.println("The sum of the numbers is " + temp);
				}
		break;
		case ("subtract") : {
			temp=calculate_sub();
			System.out.println("The difference of the numbers is " + temp);
					}
		break;
		case ("multiply") : {
			temp=calculate_mult();
			System.out.println("The product of the numbers is " + temp);
				}
		break;
		case ("divide") : {
			temp=calculate_div();
			System.out.println("The quotient of the numbers is " + temp);}
		break;
		case ("exit") : {
			System.exit(0);
		}
		default:;
		}
		
	}

	static public int calculate_add() {
		System.out.println("Enter the first number below:");
		num1 = scan.nextInt();
		scan.nextLine();
		System.out.println("Enter the second number below:");
		num2 = scan.nextInt();
		scan.nextLine();
		if ((num1>=1 && num1<=5)&&(num2>=1&&num2<=5)) {
		add_sum = num1 + num2;
		return add_sum;}
		else 
		System.out.println("Invalid entry");}
	static public int calculate_sub() {
		System.out.println("Enter the first number below:");
		num1 = scan.nextInt();
		scan.nextLine();
		System.out.println("Enter the second number below:");
		num2 = scan.nextInt();
		scan.nextLine();
		if ((num1>=1 && num1<=5)&&(num2>=1&&num2<=5)) {
			sub_sum = num1 - num2;
			return sub_sum;
		}
		else
		System.out.println("Invalid entry");
		return 0;}
	static public int calculate_mult() {
		System.out.println("Enter the first number below:");
		num1 = scan.nextInt();
		scan.nextLine();
		System.out.println("Enter the second number below:");
		num2 = scan.nextInt();
		scan.nextLine();
		if ((num1>=1 && num1<=5)&&(num2>=1&&num2<=5)) {
			mult_sum= num1 * num2;
			return mult_sum;
		}
		else 
		System.out.println("Invalid entry");
		return 0;}
	static public double calculate_div() {
		System.out.println("Enter the first number below:");
		num1 = scan.nextInt();
		scan.nextLine();
		System.out.println("Enter the second number below:");
		num2 = scan.nextInt();
		scan.nextLine();
		if ((num1>=1 && num1<=5)&&(num2>=1&&num2<=5)) {
		div_sum = num1 / num2;
		return div_sum;}
		else
		System.out.println("Invalid entry");
		return 0;}
	
}
