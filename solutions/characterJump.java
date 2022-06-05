import java.util.*;

class Main {

/*You have been given a character array. Write a function to calculate 
the minimum number of jumps from the 1st alphabet to reach the last 
alphabet; keeping these restraints: From a given character, you can either:
 1. Jump to the adjacent character 2. Jump to the same character positioned
  in a different place.*/



public static int minNumOfJumps(String inp){
  
  char[] arr = inp.toCharArray();
  int res = 0;

  for(int i = 0; i < arr.length; i++){
    
    char temp = arr[i];
    
    for(int j = arr.length - 1; j > i; j--){
      if(arr[j] == temp){
        i = j;
        break;
      }
    }

    res++;
    
  }
  
return res;
  
}
  
  
  public static void main(String[] args) {

    
    
    System.out.println(minNumOfJumps("abcacbak"));//2
    System.out.println(minNumOfJumps("abcd")); //3
    System.out.println(minNumOfJumps("abcabcabc")); //3
    
  }
}