package advance;

public class Lesson_01Enum {
	enum Fruits{
		MANGO,
		ORANGE,
		BANANA
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
    System.out.println("Hello World");
    Fruits.myFruits=Fruits.BANANA;
    System.out.println(myFruits);
	}

}
