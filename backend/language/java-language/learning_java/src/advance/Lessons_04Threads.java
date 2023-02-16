package advance;

public class Lessons_04Threads extends Thread {
public static int mynumber=0;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Lessons_04Threads thread=new Lessons_04Threads();
		thread.start();
		while(thread.isAlive()) {
//			System.out.println("is still waiting-----");
			mynumber++;
			System.out.println(mynumber);
		}
		System.out.println("this line is not in thread");
		System.out.println(mynumber);
		mynumber++;
		System.out.println(mynumber);
	}
public void run() {
	System.out.println("this line is in the thread");
	mynumber++;
}
}
