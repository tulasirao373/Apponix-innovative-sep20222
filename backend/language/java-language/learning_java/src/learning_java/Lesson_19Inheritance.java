package learning_java;

public class Lesson_19Inheritance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Apponix myob=new Apponix();
		myob.classroom();
		Tulasi tula=new Tulasi();
		tula.classroom();
		Array array=new Array();
		array.classroom();
			}
		}
		class Apponix{
			void classroom() {
				System.out.println("im working 1455");
			}
		}
		class Tulasi extends Apponix{
			
		}
		class Array extends Apponix{
			
		}
