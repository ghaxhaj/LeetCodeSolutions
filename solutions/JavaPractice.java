import java.util.*;

class Main {

  // Check if a List of integers contains only odd numbers?

  public static boolean oddNumCheck(List<Integer> list){
    boolean result = true;

    for(int i = 0; i < list.size(); i++){
      if(list.get(i) % 2 == 0){
        result = false; 
        break;
      }
    }

    return result;
    }

    //How to remove Whitespaces from String

    public static String removeWhiteSpace(String string){
    
      char[] arr = string.toCharArray();
      String resultVal = "";

      for(int i = 0; i < arr.length; i++){
        if(arr[i] != ' '){
          resultVal += arr[i];
        }
      }

    return resultVal;
    
  }
  public static void main(String[] args) {
    // List<Integer> listOne = new ArrayList<Integer>();
    // List<Integer> listTwo = new ArrayList<Integer>();

    // for(int i = 1; i < 14; i += 2){
    //   listOne.add(i);
    //   listTwo.add(i);
    // }

    // listTwo.add(2);

    // System.out.println(oddNumCheck(listOne));
    // System.out.println(oddNumCheck(listTwo));

    
    // String temp1 = "Hello world !";
    // System.out.println(removeWhiteSpace(temp1));

  
    
      
  }
}