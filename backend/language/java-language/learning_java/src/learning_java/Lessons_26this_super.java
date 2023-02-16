package learning_java;

public class Lessons_26this_super {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Trainer t=new Trainer();
		t.checkmony(100);
	}

}

class Tulas{
	int mony=10;
}
class Trainer extends Tulas{
	int mony=20;
void checkmony(int mony) {
	System.out.println(mony);
	System.out.println(this.mony);
	System.out.println(super.mony);
}
}