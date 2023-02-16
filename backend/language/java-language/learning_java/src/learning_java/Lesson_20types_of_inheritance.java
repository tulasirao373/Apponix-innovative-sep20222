package learning_java;

public class Lesson_20types_of_inheritance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
tulasi2 a=new tulasi2();
System.out.println(a.eyes);
rao b=new rao();
System.out.println(b.eyes);
	}

}
class Human1{
	int eyes;
	String nose;
	int legs;
	int hands;
	Human1(){
		eyes=1234;
	}
}
class tulasi2 extends Human1{
	
}
class rao extends tulasi2{
	String eyes;
	rao(){
		eyes="jjkjhkj";
	}
}