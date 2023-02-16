package learning_java;

import java.util.Scanner;
public class Lesson_16MethodsWithParameter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner uservalues=new Scanner (System.in);
System.out.println("Enter valule of a:");
int uservalue1 = uservalues.nextInt();
System.out.println("Enter valule of b:");
int uservalue2 = uservalues.nextInt();
System.out.println(addition(uservalue1,uservalue2));
	}
static int addition(int a,int b) {
	return a+b;
}
}
