package learning_java;

public class Lesson_25 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Humans12 hu=new Humans12("hello im dynamically given");
		System.out.println(hu.nose);
		System.out.println(hu.eyes);
	}

}


class Humans12{
	String eyes;
	boolean nose;
	Humans12(String h){
		eyes=h;
		nose=true;
	}
Humans12(){}
}

class tularao extends Humans12{
	tularao(){
		eyes="hihj";
	}
}
