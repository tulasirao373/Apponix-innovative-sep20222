package learning_java;

public class Lesson_21Encapsulation {
public static void main (String args[]) {
	Tulasi3 a=new Tulasi3();
	System.out.println(a.givepassword("hello"));
	a.updatepassword(12345678);
	System.out.println(a.givepassword("hello"));
}
}
class Tulasi3{
	String head="yes tulasi has head";
	int money=1000;
	private int password=123456;
	//getter
	int givepassword(String security) {
		if(security=="hello") {
			return password;
		}else {
			System.out.println("Wrong password");
			return 0000;
		}
	}
	void updatepassword(int a) {
		this.password=a;
	}
}
