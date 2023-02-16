package learning_java;

public class Lesson_18MethodOverriding {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Apponix1 myob=new Apponix1();
myob.classroom();
tulasi1 tula=new tulasi1();
tula.classroom();
Array1 array=new Array1();
array.classroom();
	}
}
class Apponix1{
	void classroom() {
		System.out.println("im working 1");
	}
}
class tulasi1 extends Apponix1{
	void classroom() {
		System.out.println("im working 1");
	}
}
class Array1 extends Apponix1{
	void classroom() {
		System.out.println("im working 1");
	}
}
