package advance;

import java.util.ArrayList;

public class Lesson_03generics {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
        ArrayList<Integer> numbers=new ArrayList();
        numbers.add(8);
        numbers.add(7);
        numbers.add(6);
        numbers.add(5);
        System.out.println(numbers);
        numbers.forEach((a)->{
        	System.out.println("lambda---"+a);
        });
	}
}
