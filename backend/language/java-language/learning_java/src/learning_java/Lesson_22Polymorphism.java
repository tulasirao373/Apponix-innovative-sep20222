package learning_java;

public class Lesson_22Polymorphism {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Humans h=new Humans();
h.walk();
Humans t=new Tulsi();
t.walk();
Humans ta=new Tulasirao();
ta.walk();
	}

}
class Humans{
	void walk() {
		System.out.println("humans can walk");
	}
}
class Tulsi extends Humans{
	void walk() {
		System.out.println("humans can walk can dance also");
	}
}
class Tulasirao extends Humans{
	void walk() {
		System.out.println("humans can walk can run also");
	}
}
