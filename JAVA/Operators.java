package world;

public class arithmatic_opetators {
public static void main(String[] args) 
	{
	
	//arithmatic operators
	//+,*,-,/,%
	//binary operator
	
	float a=9, b=5;
	System.out.println(a+b);//14
	System.out.println(a-b);//4
	System.out.println(a*b);//45
	System.out.println(a/b);//1.8 quotient
	System.out.println(a%b);// reminder
	
	//unary operators
	
	int c=10;
	System.out.println(c++); // post-increment
	
	System.out.println(++c); //pre-incement
	
	System.out.println(c--); // post-decrement
	
	System.out.println(--c); //pre-decement
	
	int d=-10;
	
	System.out.println(d);
	System.out.println(-d);
	
	//complement operator 
	int e=2;
	System.out.println(~e);
	
	//not  operator returns 
		boolean f=true;
		System.out.println(!f);
		
		boolean g=false;
		System.out.println(!g);
		
		//shift operator
		int h=10;
		System.out.println(h<<2);//10*2^2=10*4=40
		System.out.println(h>>2);//10/2^2=10/4=2
		
		int i=-10;
		System.out.println(i<<2);//-10*2^2=-10*4=40
		System.out.println(i>>2);
		//01010
		//10101+1	10110>>2	
		//	1	1	1	0	1
		//	-16 8	4	2	1=-3
		
		//relational Operator
		
		int w=10, x=5, y=2, z=3;
		System.out.println(w>=x);
		System.out.println(w==y);
		System.out.println(w!=z);
		System.out.println(x<=y);
	

	}
}
