import java.util.*;

class Main {


  /*
Then the third was given two numbers find out how many numbers in between those numbers are divisible by another number.
*/

  public static int numOfDiv(int a, int b){
    
    List<Integer> listOfNums = new ArrayList<Integer>();
    int result = 0;

    for(int i = a + 1; i < b; i++){
      listOfNums.add(i);
    }


    for(int i = 0; i < listOfNums.size(); i++){
      
      boolean isPrime = true;
    
      for(int j = 2; j < listOfNums.get(i); j++){
        if(listOfNums.get(i) % j == 0){
          isPrime = false;
          break;
        }
      }

       if(isPrime){
          result++;
        }
    }
    return result;
  }

  
  
  
  public static void main(String[] args) {
    System.out.println(numOfDiv(1,10)); //4
    System.out.println(numOfDiv(1,100)); //25
  }
}